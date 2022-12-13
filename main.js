/**
 * focus name input when page loads
 * @param element {HTMLElement}
 */
const focusNameInput = (element) => {
  element.focus();
};

/**
 * check if email input is a "valid" e-mail
 * @param email
 * @returns {boolean}
 */
const emailValidator = (email) => {
  const mailRegExp = /\S+@\S+\.\S+/;
  return mailRegExp.test(email);
};

/**
 * check if one of the activities is checked
 * @param activities - all activities elements
 * @returns {boolean}
 */
const activitiesValidator = (activities) => {
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].children[0].checked) {
      return true;
    }
  }

  return false;
};

/**
 * check if credit card values are valid - cc-num, zip and cvv
 * @returns {{cvvValid: boolean, creditCardValid: boolean, zipCodeValid: boolean}}
 */
const creditCardValidator = () => {
  const creditCardValue = document.getElementById('cc-num').value;
  const zipCodeValue = document.getElementById('zip').value;
  const cvvValue = document.getElementById('cvv').value;

  const creditCardValid =
    creditCardValue.length >= 13 &&
    creditCardValue.length <= 16 &&
    /^\d+$/.test(creditCardValue);

  const zipCodeValid = zipCodeValue.length === 5 && /^\d+$/.test(zipCodeValue);
  const cvvValid = cvvValue.length === 3 && /^\d+$/.test(cvvValue);

  return { creditCardValid, zipCodeValid, cvvValid };
};

/**
 *
 * @param emailValid {boolean}
 * @param emailInput - email INPUT DOM Element
 */
const emailErrorSetter = (emailValid, emailInput) => {
  const emailValue = emailInput.value;

  if (emailValue === '') {
    emailInput.nextElementSibling.textContent = 'Email should not be empty';
  } else {
    emailInput.nextElementSibling.textContent =
      'Email address must be formatted correctly';
  }

  if (!emailValid) {
    emailInput.parentElement.classList.add('not-valid');
    emailInput.classList.add('not-valid');
    emailInput.nextElementSibling.style.setProperty('display', 'block');
  } else {
    emailInput.parentElement.classList.remove('not-valid');
    emailInput.classList.remove('not-valid');
    emailInput.parentElement.classList.add('valid');
    emailInput.nextElementSibling.style.setProperty('display', 'none');
  }
};

/**
 * function sets not valid values onto the input element and error box messages
 * @param ccValid {boolean}
 * @param ccInput {HTMLInputElement}
 */
const ccErrorSetter = (ccValid, ccInput) => {
  if (!ccValid) {
    ccInput.parentElement.classList.add('not-valid');
    ccInput.classList.add('not-valid');
    ccInput.nextElementSibling.style.setProperty('display', 'block');
  } else {
    ccInput.parentElement.classList.remove('not-valid');
    ccInput.classList.remove('not-valid');
    ccInput.parentElement.classList.add('valid');
    ccInput.nextElementSibling.style.setProperty('display', 'none');
  }
};

/**
 * function sets not valid values onto the input element and error box messages
 * @param zipValid {boolean}
 * @param zipInput {HTMLElement}
 */
const zipErrorSetter = (zipValid, zipInput) => {
  if (!zipValid) {
    zipInput.parentElement.classList.add('not-valid');
    zipInput.classList.add('not-valid');
    zipInput.nextElementSibling.style.setProperty('display', 'block');
  } else {
    zipInput.parentElement.classList.remove('not-valid');
    zipInput.classList.remove('not-valid');
    zipInput.parentElement.classList.add('valid');
    zipInput.nextElementSibling.style.setProperty('display', 'none');
  }
};

/**
 * function sets not valid values onto the input element and error box messages
 * @param cvvValid {boolean}
 * @param cvvInput {HTMLInputElement}
 */
const cvvErrorSetter = (cvvValid, cvvInput) => {
  if (!cvvValid) {
    cvvInput.parentElement.classList.add('not-valid');
    cvvInput.classList.add('not-valid');
    cvvInput.nextElementSibling.style.setProperty('display', 'block');
  } else {
    cvvInput.parentElement.classList.remove('not-valid');
    cvvInput.classList.remove('not-valid');
    cvvInput.parentElement.classList.add('valid');
    cvvInput.nextElementSibling.style.setProperty('display', 'none');
  }
};

/**
 * function sets not valid values onto the input element and error box messages
 * @param nameValid {boolean}
 * @param nameInput {HTMLInputElement}
 */
const nameErrorSetter = (nameValid, nameInput) => {
  if (!nameValid) {
    nameInput.parentElement.classList.add('not-valid');
    nameInput.classList.add('not-valid');
    nameInput.nextElementSibling.style.setProperty('display', 'block');
  } else {
    nameInput.parentElement.classList.remove('not-valid');
    nameInput.classList.remove('not-valid');
    nameInput.parentElement.classList.add('valid');
    nameInput.nextElementSibling.style.setProperty('display', 'none');
  }
};

/**
 * function sets not valid values onto the input element and error box messages
 * @param activitiesValid {boolean}
 * @param activitiesFieldSet {HTMLInputElement}
 */
const activitiesErrorSetter = (activitiesValid, activitiesFieldSet) => {
  // console.log('activitiesValid: ', activitiesValid);
  // console.log('activitiesFieldSet: ', activitiesFieldSet);

  if (!activitiesValid) {
    activitiesFieldSet.classList.add('not-valid');
    activitiesFieldSet.lastElementChild.style.setProperty('display', 'block');
  } else {
    activitiesFieldSet.classList.remove('not-valid');
    activitiesFieldSet.classList.add('valid');
    activitiesFieldSet.lastElementChild.style.setProperty('display', 'none');
  }
};

/**
 * hide other job input field
 * @param element {HTMLElement}
 * @param hideInput {boolean}
 */
const toggleOtherJobRoleInput = (element, hideInput) => {
  !!hideInput
    ? (element.style.visibility = 'hidden')
    : element.removeAttribute('style');
};

/**
 * hide/show other job input element based on dropdown selection
 * @param event {Event}
 * @param otherJobRoleInput {HTMLInputElement}
 */
const jobTitleChangeHandler = (event, otherJobRoleInput) => {
  const jobTitleSelectionValue = event.target.value;

  jobTitleSelectionValue === 'other'
    ? toggleOtherJobRoleInput(otherJobRoleInput, false)
    : toggleOtherJobRoleInput(otherJobRoleInput, true);
};

/**
 * enable/disable color selection based on design selection
 * @param element {HTMLElement}
 * @param disableInput {boolean}
 */
const toggleShirtColorsInput = (element, disableInput) => {
  console.log(disableInput);
  !!disableInput
    ? element.setAttribute('disabled', 'true')
    : element.removeAttribute('disabled');
};

/**
 *
 * @param event {Event}
 * @param shirtColorsInput {HTMLSelectElement}
 */
const shirtDesignsChangeHandler = (event, shirtColorsInput) => {
  const designSelectValue = event.target.value;

  for (let i = 0; i < shirtColorsInput.options.length; i++) {
    shirtColorsInput.options[i].removeAttribute('hidden');
    if (
      shirtColorsInput.options[i].getAttribute('data-theme') !==
      designSelectValue
    ) {
      shirtColorsInput.options[i].setAttribute('hidden', 'true');
    }
  }

  if (designSelectValue) {
    toggleShirtColorsInput(shirtColorsInput, false);
  }
};

/**
 * event handler for activities fieldset
 * @param event {Event}
 * @param cost {HTMLElement}
 */
const activitiesFieldsetChangeHandler = (event, cost) => {
  const activitiesElements = event.target.parentElement.parentElement.children;
  const costContent = cost.textContent;

  let costAsNumber = Number(
    costContent.substring(costContent.indexOf('$') + 1)
  );

  const activity = event.target;
  const activityChecked = activity.checked;
  const activityName = activity.name;
  const activityDateAndTime = activity.getAttribute('data-day-and-time');
  const checkedActivityCostAsString = activity.getAttribute('data-cost');

  if (activityName !== 'all') {
    for (let i = 1; i < activitiesElements.length; i++) {
      const item = activitiesElements[i].children[0];
      const itemDateTime = item.getAttribute('data-day-and-time');

      if (itemDateTime === activityDateAndTime && item.name !== activity.name) {
        if (activityChecked) {
          item.parentElement.classList.add('disabled');
          item.setAttribute('disabled', 'true');
        } else {
          item.parentElement.classList.remove('disabled');
          item.removeAttribute('disabled');
        }
      }
    }
  }

  const checkedActivityCostNumber = Number(
    checkedActivityCostAsString.substring(
      checkedActivityCostAsString.indexOf('$') + 1
    )
  );

  if (activityChecked) {
    costAsNumber = costAsNumber + checkedActivityCostNumber;
  } else {
    costAsNumber = costAsNumber - checkedActivityCostNumber;
  }

  cost.textContent = `Total: $${costAsNumber}`;
};

/**
 * adding focus class when focus event triggered
 * @param event {Event}
 */
const activitiesFieldsetFocusHandler = (event) => {
  if (event.target.type === 'checkbox') {
    event.target.parentNode.classList.add('focus');
  }
};

/**
 * remove focus class when blur event triggered
 * @param event {Event}
 */
const activitiesFieldsetBlurHandler = (event) => {
  if (event.target.type === 'checkbox') {
    event.target.parentNode.classList.remove('focus');
  }
};

/**
 * change handler to disable inputs on the same date/time schedule
 * @param event {Event}
 * @param paypalBox {HTMLElement}
 * @param bitcoinBox {HTMLElement}
 * @param creditCardBox {HTMLElement}
 * @param expirationBox {HTMLElement}
 */
const paymentFieldsetChangeHandler = (
  event,
  paypalBox,
  bitcoinBox,
  creditCardBox,
  expirationBox
) => {
  const eventTargetName = event.target.name;
  const eventTargetValue = event.target.value;

  if (eventTargetName === 'user-payment') {
    if (eventTargetValue === 'credit-card') {
      paypalBox.style.display = 'none';
      bitcoinBox.style.display = 'none';
      creditCardBox.removeAttribute('style');
      expirationBox.removeAttribute('style');
    }

    if (eventTargetValue === 'paypal') {
      creditCardBox.style.display = 'none';
      bitcoinBox.style.display = 'none';
      expirationBox.style.display = 'none';
      paypalBox.removeAttribute('style');
    }

    if (eventTargetValue === 'bitcoin') {
      paypalBox.style.display = 'none';
      creditCardBox.style.display = 'none';
      expirationBox.style.display = 'none';
      bitcoinBox.removeAttribute('style');
    }
  }
};

/**
 * Main Start Function
 */
const main = () => {
  const nameInput = document.getElementById('name');
  focusNameInput(nameInput);

  const emailInput = document.getElementById('email');
  const jobRoleInput = document.getElementById('title');
  const otherJobRoleInput = document.getElementById('other-job-role');
  const creditCardBox = document.querySelector('.credit-card-box');
  const expirationBox = document.querySelector('.expiration-box');
  const activitiesBox = document.getElementById('activities-box');
  const activitiesFieldset = document.getElementById('activities');
  const shirtDesignsInput = document.getElementById('shirt-designs');
  const shirtColorsInput = document.getElementById('color');
  const formContainer = document.querySelector('form');
  const paymentMethod = document.querySelector('#payment');

  toggleOtherJobRoleInput(otherJobRoleInput, true);
  toggleShirtColorsInput(shirtColorsInput, true);

  const activitiesCost =
    activitiesFieldset.children.namedItem('activities-cost');

  const paymentMethodsFieldSet = document.querySelector('.payment-methods');
  const paypalBox = paymentMethodsFieldSet.children.namedItem('paypal');
  const bitcoinBox = paymentMethodsFieldSet.children.namedItem('bitcoin');
  const paymentMethodBox = paymentMethodsFieldSet.children[1];

  paymentMethodBox.children[1].children[1].selected = true;

  paypalBox.style = 'display: none';
  bitcoinBox.style = 'display: none';

  // EVENT LISTENERS
  jobRoleInput.addEventListener('change', (event) =>
    jobTitleChangeHandler(event, otherJobRoleInput)
  );

  shirtDesignsInput.addEventListener('change', (event) =>
    shirtDesignsChangeHandler(event, shirtColorsInput)
  );

  shirtColorsInput.addEventListener('change', (event) =>
    shirtDesignsChangeHandler(event, shirtColorsInput)
  );

  activitiesFieldset.addEventListener('change', (event) =>
    activitiesFieldsetChangeHandler(event, activitiesCost)
  );

  activitiesFieldset.addEventListener(
    'focus',
    (event) => activitiesFieldsetFocusHandler(event),
    true
  );

  activitiesFieldset.addEventListener(
    'blur',
    (event) => activitiesFieldsetBlurHandler(event),
    true
  );

  paymentMethodsFieldSet.addEventListener('change', (event) =>
    paymentFieldsetChangeHandler(
      event,
      paypalBox,
      bitcoinBox,
      creditCardBox,
      expirationBox
    )
  );

  emailInput.addEventListener('keyup', (event) => {
    const emailValue = event.target.value;
    const isEmailValid = emailValidator(emailValue);

    emailErrorSetter(isEmailValid, emailInput);
  });

  formContainer.addEventListener('submit', (event) => {
    const nameInputValue = nameInput.value;

    const nameInputValid =
      nameInputValue !== '' || nameInputValue.trim() !== '';

    nameErrorSetter(nameInputValid, nameInput);

    const isEmailValid = emailValidator(emailInput.value);
    emailErrorSetter(isEmailValid, emailInput);

    const isOneActivityChecked = activitiesValidator(activitiesBox.children);
    activitiesErrorSetter(isOneActivityChecked, activitiesFieldset);

    if (!nameInputValue || !isEmailValid || !isOneActivityChecked) {
      event.preventDefault();
    }

    const paymentMethodValue = paymentMethod.value;

    if (paymentMethodValue === 'credit-card') {
      const { creditCardValid, cvvValid, zipCodeValid } = creditCardValidator();

      const zipInputElement = document.querySelector('#zip');
      const creditCardInputElement = document.querySelector('#cc-num');
      const cvvInputElement = document.querySelector('#cvv');

      ccErrorSetter(creditCardValid, creditCardInputElement);
      zipErrorSetter(zipCodeValid, zipInputElement);
      cvvErrorSetter(cvvValid, cvvInputElement);

      if (!creditCardValid || !zipCodeValid || !cvvInputElement) {
        event.preventDefault();
      }
    }
  });
};

main();

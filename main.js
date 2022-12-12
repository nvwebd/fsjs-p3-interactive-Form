const focusNameInput = (element) => {
  element.focus();
};

const toggleOtherJobRoleInput = (element, hideInput) => {
  !!hideInput
    ? (element.style = 'visibility: hidden')
    : element.removeAttribute('style');
};

const jobTitleChangeHandler = (event, otherJobRoleInput) => {
  const jobTitleSelectionValue = event.target.value;

  jobTitleSelectionValue === 'other'
    ? toggleOtherJobRoleInput(otherJobRoleInput, false)
    : toggleOtherJobRoleInput(otherJobRoleInput, true);
};

const toggleShirtColorsInput = (element, disableInput) => {
  console.log(disableInput);
  !!disableInput
    ? element.setAttribute('disabled', 'true')
    : element.removeAttribute('disabled', null);
};

const shirtDesignsChangeHandler = (event, shirtColorsInput) => {
  const designSelectValue = event.target.value;

  for (let i = 0; i < shirtColorsInput.options.length; i++) {
    shirtColorsInput.options[i].removeAttribute('hidden');
    if (
      shirtColorsInput.options[i].getAttribute('data-theme') !==
      designSelectValue
    ) {
      shirtColorsInput.options[i].setAttribute('hidden', true);
    }
  }

  if (designSelectValue) {
    toggleShirtColorsInput(shirtColorsInput, false);
  }
};

const activitiesFieldsetChangeHandler = (event, cost) => {
  const costContent = cost.textContent;

  let costAsNumber = Number(
    costContent.substring(costContent.indexOf('$') + 1)
  );

  const activityChecked = event.target.checked;
  const checkedActivityCostAsString = event.target.getAttribute('data-cost');
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

const paymentFieldsetChangeHandler = (
  event,
  paypalBox,
  bitcoinBox,
  creditCardBox
) => {
  const eventTargetName = event.target.name;
  const eventTargetValue = event.target.value;

  if (eventTargetName === 'user-payment') {
    if (eventTargetValue === 'credit-card') {
      paypalBox.style = 'display: none';
      bitcoinBox.style = 'display: none';
      creditCardBox.removeAttribute('style');
    }

    if (eventTargetValue === 'paypal') {
      creditCardBox.style = 'display: none';
      bitcoinBox.style = 'display: none';
      paypalBox.removeAttribute('style');
    }

    if (eventTargetValue === 'bitcoin') {
      paypalBox.style = 'display: none';
      creditCardBox.style = 'display: none';
      bitcoinBox.removeAttribute('style');
    }
  }
};

const emailValidator = (email) => {
  const mailRegExp = /\S+@\S+\.\S+/;
  return mailRegExp.test(email);
};

const activitiesValidator = (activities) => {
  for (let i = 0; i < activities.length; i++) {
    if (activities[i].children[0].checked) {
      return true;
    }
  }

  return false;
};

const creditCardValidator = (creditCard) => {
  const creditCardValue = document.getElementById('cc-num').value;
  const zipCodeValue = document.getElementById('zip').value;
  const cvvValue = document.getElementById('cvv').value;
  const creditCardValid =
    creditCardValue.length < 13 || creditCardValue.length > 16;
  const zipCodeValid = zipCodeValue.length === 5;
  const cvvValid = cvvValue.length === 3;

  return creditCardValid && zipCodeValid && cvvValid;
};

const main = () => {
  const nameInput = document.getElementById('name');
  focusNameInput(nameInput);

  const jobRoleInput = document.getElementById('title');
  const otherJobRoleInput = document.getElementById('other-job-role');
  toggleOtherJobRoleInput(otherJobRoleInput, true);

  const shirtDesignsInput = document.getElementById('shirt-designs');
  const shirtColorsInput = document.getElementById('color');
  toggleShirtColorsInput(shirtColorsInput, true);

  const activitiesFieldset = document.getElementById('activities');
  const activitiesCost =
    activitiesFieldset.children.namedItem('activities-cost');

  const paymentMethodsFieldSet = document.querySelector('.payment-methods');
  const paypalBox = paymentMethodsFieldSet.children.namedItem('paypal');
  const bitcoinBox = paymentMethodsFieldSet.children.namedItem('bitcoin');
  const paymentMethodBox = paymentMethodsFieldSet.children[1];
  const creditCardBox =
    paymentMethodsFieldSet.children.namedItem('credit-card');

  paymentMethodBox.children[1].children[1].selected = true;

  paypalBox.style = 'display: none';
  bitcoinBox.style = 'display: none';

  const formContainer = document.querySelector('form');

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

  paymentMethodsFieldSet.addEventListener('change', (event) =>
    paymentFieldsetChangeHandler(event, paypalBox, bitcoinBox, creditCardBox)
  );

  formContainer.addEventListener('submit', (event) => {
    const nameInputValue = document.getElementById('name').value;
    const emailInputValue = document.getElementById('email').value;
    const activitiesBox = document.getElementById('activities-box');
    const creditCardBox = document.querySelector('.credit-card-box');
    const paymentMethodValue = document.querySelector('#payment').value;

    const isEmailValid = emailValidator(emailInputValue);
    const isOneActivityChecked = activitiesValidator(activitiesBox.children);
    
    if (paymentMethodValue === 'credit-card') {
      const isCreditCardValid = creditCardValidator(creditCardBox);
    }

    event.preventDefault();
    console.log('submitting');
  });
};

main();

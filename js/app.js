window.onload = function () {
  let guideButton = document.getElementsByClassName("guide__btn")[0];
  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeButton = document.getElementsByClassName(
    "email-modal__close-btn"
  )[0];
  let emailInput = document.getElementsByClassName("email-modal__input")[0];
  let emailButton = document.getElementsByClassName("email-modal__btn")[0];
  let thankContainer = document.getElementsByClassName("email-thank")[0];

  guideButton.addEventListener("click", () => {
    emailModal.classList.add("email-modal--visible");
    console.log("get the guide");
  });

  let closeModal = () => {
    closeModal();
  };

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  let addErrors = () => {
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.add("email-modal__error-message--active");
  };

  let removeErrors = () => {
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
  };

  let showThankMessage = () => {
    thankContainer.classList.add("email-thank--success");
    setTimeout(() => {
      thankContainer.classList.remove("email-thank--success");
      emailModal.classList.remove("email-modal--visible");
    }, 6000);
  };

  emailInput.addEventListener("click", () => {
    removeErrors();
  });

  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      showThankMessage();
      console.log(emailInput.value);
    } else {
      addErrors();
    }
  });

  closeButton.addEventListener("click", () => {
    emailModal.classList.remove("email-modal--visible");
  });

  console.log(document);
};

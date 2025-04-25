const form = document.getElementById("regForm");
const inp = document.querySelector("input")
const fields = ["name", "email", "phone", "subject", "message"];

const validateField = (id) => {
  const input = document.getElementById(id);
  const error = input.nextElementSibling;
  if (!input.value.trim()) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    inp.style.border="1px solid green"
  }
};

fields.forEach(id => {
  const input = document.getElementById(id);
  input.addEventListener("blur", () => {
    validateField(id);
  });
});

const validateAll = () => {
  fields.forEach(id => validateField(id));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateAll();
});
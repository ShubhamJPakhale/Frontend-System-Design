const config = {
  title: "Config Driven UI",
  description:
    "A system that generates user interfaces based on configuration files, allowing for dynamic and flexible UI rendering without hardcoding components.",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
      required: true,
      placeholder: "Enter your name",
    },
    {
      name: "age",
      type: "number",
      label: "Age",
      required: true,
      placeholder: "Enter your age",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true,
      placeholder: "Enter your password",
    },
    {
      name: "subscribe",
      type: "checkbox",
      label: "Subscribe to Newsletter",
      required: false,
    },
  ],
  actions: [
    { name: "submit", label: "Submit", type: "submit" },
    { name: "reset", label: "Reset", type: "reset" },
  ],
};

const createField = (field) => {
  const wrapper = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = field.label + ": ";
  label.setAttribute("for", field.name);

  const input = document.createElement("input");
  input.type = field.type || "text";
  input.name = field.name;
  input.required = field.required || false;

  if (field.placeholder && input.type !== "checkbox") {
    input.placeholder = field.placeholder;
  }

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
};

const generateConfigForm = (config, containerId) => {
  const container = document.getElementById(containerId);

  // Title & Description
  if (config.title) {
    const title = document.createElement("h2");
    title.textContent = config.title;
    container.appendChild(title);
  }

  if (config.description) {
    const desc = document.createElement("p");
    desc.textContent = config.description;
    container.appendChild(desc);
  }

  // Form
  const form = document.createElement("form");

  // Add fields dynamically
  config.fields.forEach((field) => form.appendChild(createField(field)));

  // Add action buttons
  config.actions.forEach((action) => {
    const button = document.createElement("button");
    button.type = action.type;
    button.textContent = action.label;
    form.appendChild(button);
  });

  // Submit handler
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {};

    config.fields.forEach((field) => {
      const element = form.elements[field.name];
      if (!element) return;

      if (field.type === "checkbox") {
        data[field.name] = element.checked;
      } else {
        data[field.name] = element.value;
      }
    });

    console.log("Form Data:", data);
  });

  // Reset handler
  form.addEventListener("reset", () => console.log("Form Reset!"));

  container.appendChild(form);
};

generateConfigForm(config, "config-driven-form");

function handleLoginForm(event) {
    event.preventDefault(); 

    const form = event.target;
    const elements = form.elements;

    let anyFieldEmpty = false;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type !== "submit" && elements[i].value === "") {
        anyFieldEmpty = true;
        break;
      }
    }

    if (anyFieldEmpty) {
      alert("Please fill in all fields.");
    } else {
      const formData = {};
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].type !== "submit") {
          formData[elements[i].name] = elements[i].value;
        }
      }
      console.log("Form Data:", formData);

      form.reset();
    }
  }

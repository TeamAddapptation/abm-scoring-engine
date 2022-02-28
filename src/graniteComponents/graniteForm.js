export default function graniteForm(formsBlock) {
  const id = formsBlock.id;
  const granite_id = formsBlock.id;
  const o = formsBlock.options;
  const r = formsBlock.records;
  const totalRecords = r.length;
  const action = o.addapptation_action || "GET";
  const form_id =
    o.form_id || "g__" + Math.random().toString(36).substring(2, 15);
  const method = o.method || "POST";
  const enctype = o.enctype || "application/x-www-form-urlencoded";
  /* -------------------- Check Alignment & Set Mode ----------------------*/
  let granite_div = document.getElementById(id);
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  }
  /* -------------------- Form Container ----------------------*/
  let form_container = document.createElement("form");
  // conditional attributes
  form_container.setAttribute("action", action);
  form_container.setAttribute("id", form_id);
  // static attributes
  form_container.setAttribute("method", method);
  form_container.setAttribute("enctype", enctype);
  // form_container.setAttribute("novalidate", "false");

  /* -------------------- Call Form Functions ----------------------*/
  r.forEach(function (r, num) {
    buildRecord(r, num);
  });

  /* -------------------- Labels and Info ----------------------*/
  function addLabels(field_info_container, r) {
    //Global labels and character counter
    if (!!r.title) {
      let label = document.createElement("label");
      String(r.required) === "true" ? label.classList.add("required") : "";
      label.setAttribute("for", r.name);
      label.innerHTML = r.title;
      field_info_container.appendChild(label);
    }
    return field_info_container;
  }
  /* -------------------- Standard Field Attributes ----------------------*/
  function basicAttributes(r, input, class_name) {
    input.setAttribute("class", class_name);
    !!r.g_type ? input.setAttribute("type", r.g_type) : "";
    !!form_id ? input.setAttribute("form_id", form_id) : "";
    !!r.name ? input.setAttribute("name", r.name) : "";
    !!r.value
      ? input.setAttribute("value", r.value)
      : input.setAttribute("value", "");
    !!r.title ? input.setAttribute("title", r.title) : "";
    !!r.placeholder ? input.setAttribute("placeholder", r.placeholder) : "";
    parseInt(r.length) > 0 ? input.setAttribute("maxlength", r.length) : "";
    !!r.invalid_message
      ? input.setAttribute(
          "oninvalid",
          `this.setCustomValidity("${r.invalid_message}")`
        )
      : "";
    input.required = r.required;
    String(r.disabled) === "true"
      ? (input.disabled = true)
      : (input.disabled = false);
    return input;
  }
  /* -------------------- Hidden Fields ----------------------*/
  function hiddenFields(hidden, name, value) {
    hidden.setAttribute("type", "hidden");
    hidden.setAttribute("name", name);
    hidden.setAttribute("form_id", form_id);
    hidden.setAttribute("value", value);
    return hidden;
  }
  /* -------------------- Form Field ----------------------*/
  function buildRecord(r, num) {
    let error_field = document.createElement("div");
    error_field.setAttribute("class", "g__error_msg");

    r.id = !!r.id ? r.id : "a__" + Math.random().toString(36).substring(2, 15);
    let class_name = "g__field_" + r.g_type;

    let field_info_container;
    let form_field;
    if (
      r.g_type != "subheader" &&
      r.g_type != "description" &&
      r.g_type != "hidden" &&
      r.g_type != "divider"
    ) {
      form_field = document.createElement("div");
      form_field.setAttribute("class", "g__form_field");
      !!r.field_max_width
        ? (form_field.style.maxWidth = r.field_max_width)
        : "";
      form_field.setAttribute("data-micro-id", id);
      !!r.addapptation_id
        ? form_field.setAttribute("data-record-id", r.addapptation_id)
        : "";
      !!r.classes ? form_field.classList.add(r.classes) : "";
      String(r.disabled) === "true"
        ? form_field.classList.add("g__disabled")
        : "";

      field_info_container = document.createElement("div");
      field_info_container.setAttribute("class", "g__field_info");
    } else if (r.g_type === "hidden") {
      form_field = document.createElement("div");
      form_field.setAttribute("class", "g__hidden_field");
    }

    //build each field depending on the type
    let input;
    switch (r.g_type) {
      case "boolean":
      case "checkbox":
        let check_container = document.createElement("div");
        String(r.switch) === "true"
          ? check_container.setAttribute("class", "g__check_container_switch")
          : check_container.setAttribute("class", "g__check_container");
        input = document.createElement("input");
        r.g_type === "boolean" ? (r.g_type = "checkbox") : "";
        input.setAttribute("class", class_name);
        input.setAttribute("id", r.id);
        input.setAttribute("type", r.g_type);
        input.setAttribute("form_id", form_id);
        input.setAttribute("name", r.name);
        input.setAttribute("title", r.title);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.value) === "true"
          ? input.setAttribute("value", r.value)
          : input.setAttribute("value", "false");
        String(r.value) === "true"
          ? (input.checked = true)
          : (input.checked = false);
        String(r.value) === "true"
          ? input.classList.add("g__checked")
          : input.classList.add("g__unchecked");
        input.required = String(r.required) === "true";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        check_container.appendChild(input);

        if (String(r.switch) === "true") {
          let slider = document.createElement("span");
          slider.classList.add("g__slider");
          check_container.appendChild(slider);
        }

        let label = document.createElement("label");
        label.setAttribute("for", r.id);
        label.innerHTML = r.title;
        String(r.required) === "true" ? (label.innerHTML += "*") : "";
        check_container.appendChild(label);

        form_field.appendChild(check_container);
        form_field.appendChild(error_field);
        break;
      case "color":
        form_field.appendChild(addLabels(field_info_container, r));
        let color_container = document.createElement("div");
        color_container.setAttribute("class", "g__color_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        input.setAttribute("pattern", "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$");
        var hex_display = document.createElement("input");
        hex_display.type = "text";
        hex_display.setAttribute("class", "g__hex_value");
        let color_value = !!r.value ? r.value : "#ffffff";
        hex_display.setAttribute("value", color_value);
        !!r.name ? hex_display.setAttribute("data-attr", r.name) : "";
        String(r.disabled) === "true" ? (hex_display.disabled = true) : "";
        hex_display.setAttribute(
          "pattern",
          "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
        );
        color_container.appendChild(input);
        color_container.appendChild(hex_display);
        form_field.appendChild(color_container);
        form_field.appendChild(error_field);
        break;
      case "currency":
        form_field.appendChild(addLabels(field_info_container, r));
        let curr_container = document.createElement("div");
        curr_container.setAttribute("class", "g__currency_container");
        r.show_stepper_arrow
          ? curr_container.classList.add("g__show_counter")
          : curr_container.classList.add("g__hide_counter");
        let curr_format = document.createElement("div");
        curr_format.setAttribute("class", "g__currency_format");
        curr_format.innerHTML = r.curr_format || "$";
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        r.type = "number";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.inputmode = "decimal";
        !!r.max_number ? (input.max = r.max_number) : "";
        !!r.min_number ? (input.min = r.min_number) : "";
        !!r.step ? (input.step = r.step) : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        //Increase decrease container
        let curr_counter = document.createElement("div");
        curr_counter.setAttribute("class", "g__number_plus_minus");
        // Increase container
        let curr_increase = document.createElement("div");
        curr_increase.setAttribute("class", "g__number_increase");
        curr_counter.appendChild(curr_increase);
        // Decrease container
        let curr_decrease = document.createElement("div");
        curr_decrease.setAttribute("class", "g__number_decrease");
        curr_counter.appendChild(curr_decrease);
        //Append the parent elements
        curr_container.appendChild(curr_format);
        curr_container.appendChild(input);
        curr_container.appendChild(curr_counter);
        form_field.appendChild(curr_container);
        form_field.appendChild(error_field);
        break;
      case "date":
        form_field.appendChild(addLabels(field_info_container, r));
        let date_container = document.createElement("div");
        date_container.setAttribute("class", "g__date_container");
        input = document.createElement("input");
        input.setAttribute("type", "date");
        input.setAttribute("class", "g__date_field");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!form_id ? input.setAttribute("form_id", form_id) : "";
        !!r.name ? input.setAttribute("name", r.name) : "";
        !!r.value ? input.setAttribute("value", r.value) : "";
        dateRange(r, input);
        !!r.placeholder ? input.setAttribute("placeholder", r.placeholder) : "";
        input.required = r.required;
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        String(r.disabled) === "true" ? (input.disabled = true) : "";
        input.autocomplete = "false";
        let date_icon = document.createElement("div");
        date_icon.setAttribute("class", "g__calendar_icon");
        date_icon.innerHTML = "<i class='fal fa-calendar-alt'></i>";
        date_icon.style.display = "none";
        date_container.appendChild(input);
        date_container.appendChild(date_icon);
        form_field.appendChild(date_container);
        form_field.appendChild(error_field);
        break;
      case "divider":
        form_field = document.createElement("div");
        form_field.classList.add("g__form_divider");
        break;
      case "description":
        form_field = document.createElement("p");
        form_field.setAttribute("data-micro-id", id);
        !!r.addapptation_id
          ? form_field.setAttribute("data-record-id", r.addapptation_id)
          : "";
        form_field.setAttribute("class", "g__form_description");
        !!r.description_font_size
          ? (form_field.style.fontSize = r.description_font_size)
          : "";
        !!r.description_top_padding
          ? (form_field.style.paddingTop = r.description_top_padding + "px")
          : "";
        !!r.description_bottom_padding
          ? (form_field.style.paddingBottom =
              r.description_bottom_padding + "px")
          : "";
        form_field.innerHTML = r.value || "Description";
        break;
      case "email":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;
      case "file":
        form_field.appendChild(addLabels(field_info_container, r));
        let file_container = document.createElement("div");
        file_container.setAttribute("class", "g__file_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        !!r.accepted_file_types
          ? input.setAttribute("accept", r.accepted_file_types)
          : "";
        r.multiple ? input.setAttribute("multiple", "true") : "";
        input.setAttribute("hidden", "hidden");
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        let file_btn = document.createElement("button");
        file_btn.setAttribute("type", "button");
        file_btn.setAttribute("class", "g__file_btn");
        file_btn.innerText = "Choose File";
        let file_text = document.createElement("div");
        file_text.setAttribute("class", "g__file_text");
        file_text.innerText = r.placeholder || "No file chosen, yet.";
        file_container.appendChild(input);
        file_container.appendChild(file_btn);
        file_container.appendChild(file_text);
        form_field.appendChild(file_container);
        form_field.appendChild(error_field);
        break;
      case "hidden":
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        form_field.appendChild(input);
        break;
      case "multi":
        form_field.appendChild(addLabels(field_info_container, r));
        let multi_container = document.createElement("div");
        multi_container.setAttribute("class", "g__multi_container");
        let multi_options = r.options;
        let multi_double_arr =
          Array.isArray(multi_options) && Array.isArray(multi_options[0]);
        let multi_select = document.createElement("select");
        !!r.name ? multi_select.setAttribute("data-attr", r.name) : "";
        multi_select.multiple = true;
        String(r.required) === "true"
          ? multi_select.classList.add("g__required")
          : "";
        if (multi_double_arr) {
          for (let i = 0; i < multi_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", multi_options[i][0]);
            option.innerHTML = multi_options[i][1];
            multi_select.appendChild(option);
          }
        } else {
          for (let i = 0; i < multi_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", multi_options[i]);
            option.innerHTML = multi_options[i];
            multi_select.appendChild(option);
          }
        }
        multi_container.appendChild(multi_select);
        form_field.appendChild(multi_container);
        break;
      case "number":
        form_field.appendChild(addLabels(field_info_container, r));
        let num_container = document.createElement("div");
        num_container.setAttribute("class", "g__number_container");
        String(r.show_stepper_arrow === "true")
          ? num_container.classList.add("g__show_counter")
          : num_container.classList.add("g__hide_counter");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.max_number ? (input.max = r.max_number) : "";
        !!r.min_number ? (input.min = r.min_number) : "";
        !!r.step ? (input.step = r.step) : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        if (!!r.num_unit) {
          let unit = document.createElement("div");
          unit.classList.add("g__num_unit");
          unit.innerHTML = r.num_unit;
          num_container.appendChild(unit);
        }
        // Increase decrease container
        let num_counter = document.createElement("div");
        num_counter.setAttribute("class", "g__number_plus_minus");
        // Increase container
        let num_increase = document.createElement("div");
        num_increase.setAttribute("class", "g__number_increase");
        !!r.name ? num_increase.setAttribute("data-attr", r.name) : "";
        num_counter.appendChild(num_increase);
        // Decrease container
        let num_decrease = document.createElement("div");
        num_decrease.setAttribute("class", "g__number_decrease");
        !!r.name ? num_decrease.setAttribute("data-attr", r.name) : "";
        num_counter.appendChild(num_decrease);
        //Append the parent elements
        num_container.appendChild(input);
        num_container.appendChild(num_counter);
        form_field.appendChild(num_container);
        form_field.appendChild(error_field);
        break;
      case "password":
        form_field.appendChild(addLabels(field_info_container, r));
        let pass_container = document.createElement("div");
        pass_container.setAttribute("class", "g__password_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        !!r.pattern ? input.setAttribute("pattern", r.pattern) : "";
        let pass_show = document.createElement("div");
        pass_show.setAttribute("class", "g__password_show");
        r.show_password_option
          ? ""
          : pass_show.classList.add("g__hide_password_btn");
        pass_show.innerHTML = '<i class="far fa-eye"></i>';
        pass_container.appendChild(input);
        pass_container.appendChild(pass_show);
        form_field.appendChild(pass_container);
        form_field.appendChild(error_field);
        break;
      case "picklist":
        form_field.appendChild(addLabels(field_info_container, r));
        let picklist_options = !!r.options
          ? r.options
          : ["option 1", "option 2"];
        let picklist_double_arr =
          Array.isArray(picklist_options) && Array.isArray(picklist_options[0]);
        input = document.createElement("div");
        if (String(r.multiple) === "true") {
          input.setAttribute("multiple", "true");
          input.classList.add("g__picklist_multiple");
        }
        input.classList.add("g__picklist");
        String(o.default_picklists) === "true"
          ? input.classList.add("g__default_picklist")
          : input.classList.add("g__custom_picklist");
        String(r.picklist_search) === "true"
          ? input.classList.add("g__search")
          : "";
        let select = document.createElement("select");
        !!r.name ? select.setAttribute("data-attr", r.name) : "";
        select.setAttribute("class", class_name);
        !!r.g_type ? select.setAttribute("type", r.g_type) : "";
        !!form_id ? select.setAttribute("form_id", form_id) : "";
        !!r.name ? select.setAttribute("name", r.name) : "";
        !!r.title ? select.setAttribute("title", r.title) : "";
        !!r.placeholder
          ? select.setAttribute("placeholder", r.placeholder)
          : "";
        select.required = r.required;
        String(r.disabled) === "true"
          ? (select.disabled = true)
          : (select.disabled = false);
        String(r.required) === "true"
          ? select.classList.add("g__required")
          : "";
        select.setAttribute("id", r.id);
        String(r.multiple) === "true"
          ? select.classList.add("g__select_multiple")
          : select.classList.add("g__select_default");
        String(r.multiple) === "true"
          ? select.setAttribute("multiple", "true")
          : "";
        if (String(o.default_picklists) === "true" && r.placeholder) {
          let option_placeholder = document.createElement("option");
          option_placeholder.disabled = true;
          option_placeholder.selected = true;
          option_placeholder.hidden = true;
          option_placeholder.innerHTML = r.placeholder;
          select.appendChild(option_placeholder);
        }
        if (picklist_double_arr) {
          for (let i = 0; i < picklist_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", picklist_options[i][0]);
            if (r.value === picklist_options[i][0]) {
              option.selected = true;
            }
            option.innerHTML = picklist_options[i][1];
            select.appendChild(option);
          }
        } else {
          for (let i = 0; i < picklist_options.length; i++) {
            let option = document.createElement("option");
            option.setAttribute("value", picklist_options[i]);
            if (r.value === picklist_options[i]) {
              option.selected = true;
            }
            option.innerHTML = picklist_options[i];
            select.appendChild(option);
          }
        }

        input.appendChild(select);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;
      case "radio":
        form_field.appendChild(addLabels(field_info_container, r));
        let radio_options = !!r.options ? r.options : ["Radio 1", "Radio 2"];
        let is_array = Array.isArray(radio_options);
        if (!is_array) {
          let arr_options = radio_options.split(",");
          radio_options = arr_options;
        }
        let is_double_array =
          Array.isArray(radio_options) && Array.isArray(radio_options[0]);
        let radio_container = document.createElement("div");
        radio_container.setAttribute("class", "g__radio_container");
        r.radio_style === "button"
          ? radio_container.classList.add("g__radio_btn")
          : "";
        radio_container.id = r.id;
        for (let i = 0; i < radio_options.length; i++) {
          let input_container = document.createElement("div");
          input_container.setAttribute("class", "g__radio_option");
          input = document.createElement("input");
          input.setAttribute("class", "g__field_radio");
          !!r.name ? input.setAttribute("data-attr", r.name) : "";
          !!form_id ? input.setAttribute("form_id", form_id) : "";
          String(r.next_on_click) === "true"
            ? input.addEventListener("click", () => {
                nextPrev(currStep);
              })
            : "";
          input.type = "radio";
          input.name = r.name;
          input.required = r.required;
          String(r.required) ? input.classList.add("g__required") : "";
          String(r.disabled) === "true" ? (input.disabled = "true") : "";
          let radio_label = document.createElement("label");
          radio_label.setAttribute("class", "g__radio_label");
          if (is_double_array) {
            input.id = radio_options[i][0];
            input.value = radio_options[i][0];
            r.value === radio_options[i][0]
              ? input.setAttribute("checked", "true")
              : "";
            radio_label.id = radio_options[i][0];
            radio_label.setAttribute("for", radio_options[i][0]);
            radio_label.innerHTML = radio_options[i][1];
          } else {
            let cleanId = radio_options[i].replace(/ /g, "");
            input.id = cleanId;
            input.value = radio_options[i];
            r.value === radio_options[i]
              ? input.setAttribute("checked", "true")
              : "";
            radio_label.id = cleanId;
            radio_label.setAttribute("for", cleanId);
            radio_label.innerHTML = radio_options[i];
          }
          input_container.appendChild(input);
          if (String(r.radio_style) != "button") {
            let radio = document.createElement("div");
            radio.setAttribute("class", "g__radio");
            input_container.appendChild(radio);
          }
          input_container.appendChild(radio_label);
          radio_container.appendChild(input_container);
        }
        form_field.appendChild(radio_container);
        form_field.appendChild(error_field);
        break;
      case "range":
        form_field.appendChild(addLabels(field_info_container, r));
        let min = r.min_number || 0;
        let max = r.max_number || 100;
        let range_container = document.createElement("div");
        range_container.setAttribute("class", "g__range_container");
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        input.setAttribute("min", min);
        input.setAttribute("max", max);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        let output = document.createElement("input");
        String(r.disabled) === "true" ? (output.disabled = true) : "";
        output.setAttribute("class", "g__range_output");
        output.setAttribute("type", "number");
        !!r.value ? output.setAttribute("value", r.value) : "";
        !!r.name ? output.setAttribute("data-attr", r.name) : "";
        // Unit indicator
        let unit = document.createElement("div");
        unit.setAttribute("class", "g__range_unit");
        unit.innerHTML = r.range_unit || "px";
        // Increase decrease container
        let plusMinus = document.createElement("div");
        plusMinus.setAttribute("class", "g__range_plus_minus");
        // Increase container
        let increase = document.createElement("div");
        increase.setAttribute("class", "g__range_increase");
        !!r.name ? increase.setAttribute("data-attr", r.name) : "";
        plusMinus.appendChild(increase);
        // Decrease container
        let decrease = document.createElement("div");
        decrease.setAttribute("class", "g__range_decrease");
        !!r.name ? decrease.setAttribute("data-attr", r.name) : "";
        plusMinus.appendChild(decrease);
        //Append the parent elements
        range_container.appendChild(input);
        range_container.appendChild(output);
        range_container.appendChild(unit);
        range_container.appendChild(plusMinus);
        form_field.appendChild(error_field);
        form_field.appendChild(range_container);
        break;
      case "spacing":
        form_field.appendChild(addLabels(field_info_container, r));
        const spacing_arr = ["top", "link", "bottom", "left", "link", "right"];
        const spacing_container = document.createElement("div");
        spacing_container.setAttribute("class", "g__spacing_container");
        //Desktop hidden field
        const hidden_desktop = document.createElement("input");
        hidden_desktop.setAttribute("class", "g__space_desktop_hidden");
        hidden_desktop.type = "hidden";
        !!form_id ? hidden_desktop.setAttribute("form_id", form_id) : "";
        !!r.name ? (hidden_desktop.name = r.name) : "";
        !!r.title ? (hidden_desktop.title = r.title) : "";
        spacing_container.appendChild(hidden_desktop);
        //mobile hidden field
        const hidden_mobile = document.createElement("input");
        hidden_mobile.setAttribute("class", "g__space_desktop_hidden");
        hidden_mobile.type = "hidden";
        !!form_id ? hidden_mobile.setAttribute("form_id", form_id) : "";
        !!r.name ? (hidden_mobile.name = r.name) : "";
        !!r.title ? (hidden_mobile.title = r.title) : "";
        spacing_container.appendChild(hidden_mobile);
        spacing_arr.forEach((val, num) => {
          if (val === "link") {
            let field_container = document.createElement("div");
            num === 1
              ? field_container.setAttribute("class", `g__link g__link_tb`)
              : field_container.setAttribute("class", `g__link g__link_lr`);
            spacing_container.appendChild(field_container);
            let link = document.createElement("div");
            link.setAttribute("class", "g__space_link");
            link.innerHTML = '<i class="far fa-link"></i>';
            field_container.appendChild(link);
            form_field.appendChild(spacing_container);
          } else {
            let field_container = document.createElement("div");
            field_container.setAttribute("class", `g__space_field g__${val}`);
            spacing_container.appendChild(field_container);
            let input = document.createElement("input");
            input.type = "text";
            input.setAttribute("class", `g__input_${val}`);
            input.setAttribute("data-side", `${val}`);
            field_container.appendChild(input);
            let label = document.createElement("p");
            label.setAttribute("class", `g__label_${val}`);
            label.innerHTML = val;
            field_container.appendChild(label);
            form_field.appendChild(spacing_container);
          }
        });
        break;
      case "header":
      case "subheader":
        form_field = document.createElement("h2");
        form_field.setAttribute("class", "g__form_header");
        form_field.setAttribute("data-micro-id", id);
        form_field.setAttribute("type", "header");
        !!r.name ? form_field.setAttribute("data-attr", r.name) : "";
        !!r.addapptation_id
          ? form_field.setAttribute("data-record-id", r.addapptation_id)
          : "";
        !!r.heading_font_size
          ? (form_field.style.fontSize = r.heading_font_size + "px")
          : "";
        !!r.heading_top_padding
          ? (form_field.style.paddingTop = r.heading_top_padding + "px")
          : "";
        !!r.heading_bottom_padding
          ? (form_field.style.paddingBottom = r.heading_bottom_padding + "px")
          : "";
        form_field.innerHTML = r.title || "Heading";
        break;
      case "tel":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.setAttribute("form", form_id);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;
      case "textarea":
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("textarea");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.innerHTML = r.value || "";
        input.rows = r.rows || "4";
        input.setAttribute("cols", "50");
        input.setAttribute("form", form_id);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;
      case "quill":
        form_field.appendChild(addLabels(field_info_container, r));
        let quil = document.createElement("div");
        quil.setAttribute("class", "g__quil_editor");
        let quill_id = "quill_" + num;
        quil.setAttribute("id", quill_id);
        input = document.createElement("input");
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        input.setAttribute("id", quill_id);
        basicAttributes(r, input, class_name);
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        input.setAttribute("type", "hidden");
        form_field.appendChild(quil);
        form_field.appendChild(input);
        form_field.appendChild(error_field);
        break;
      default:
        form_field.appendChild(addLabels(field_info_container, r));
        input = document.createElement("input");
        input.setAttribute("id", r.id);
        basicAttributes(r, input, class_name);
        !!r.name ? input.setAttribute("data-attr", r.name) : "";
        String(r.required) === "true" ? input.classList.add("g__required") : "";
        form_field.appendChild(input);
        form_field.appendChild(error_field);
    }
    form_container.appendChild(form_field);
  }
  /* -------------------- Hidden Option Fields ----------------------*/
  if (!!o.db_id || !!o.db_object || !!o.db_action || !!o.db_redirect) {
    let hidden_container = document.createElement("div");
    hidden_container.classList.add("g__hidden_field");
    if (!!o.db_id) {
      let hidden_db = document.createElement("input");
      hiddenFields(hidden_db, "Id", o.db_id);
      hidden_container.appendChild(hidden_db);
      form_container.appendChild(hidden_container);
    }
    if (!!o.db_object) {
      let hidden_object = document.createElement("input");
      hiddenFields(hidden_object, "object", o.db_object);
      hidden_container.appendChild(hidden_object);
      form_container.appendChild(hidden_container);
    }
    if (!!o.db_action) {
      let hidden_action = document.createElement("input");
      hiddenFields(hidden_action, "submit_form", o.db_action);
      hidden_container.appendChild(hidden_action);
      form_container.appendChild(hidden_container);
    }
    if (!!o.db_redirect) {
      let hidden_redirect = document.createElement("input");
      hiddenFields(hidden_redirect, "redirect_to", o.db_redirect);
      hidden_container.appendChild(hidden_redirect);
      form_container.appendChild(hidden_container);
    }
    if (!!o.flash_message) {
      let hidden_flash = document.createElement("input");
      hiddenFields(hidden_flash, "flash_message", o.flash_message);
      hidden_container.appendChild(hidden_flash);
      form_container.appendChild(hidden_container);
    }
  }
  document.getElementById(granite_id).appendChild(form_container);

  /* -------------------- Submit Cancel ----------------------*/
  if (true) {
    let button_container = document.createElement("div");
    button_container.id = "g__submit_cancel";
    button_container.setAttribute("class", "g__button_container");
    // Submit & Cancel Button
    if (true) {
      let submit = document.createElement("button");
      submit.setAttribute("id", "g__submit_btn");
      submit.setAttribute("type", "submit");
      o.show_loader ? submit.classList.add("show_loader") : "";
      submit.innerHTML = o.submit_label || "Submit";
      button_container.appendChild(submit);
    }
    if (true) {
      let cancel = document.createElement("button");
      cancel.setAttribute("id", "g__cancel_btn");
      cancel.setAttribute("type", "reset");
      cancel.innerHTML = o.cancel_label;
      button_container.appendChild(cancel);
    }
    form_container.appendChild(button_container);
  }
}

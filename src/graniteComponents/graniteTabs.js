export default function graniteTabs(jsonBlock, jsonTheme) {
  /*---------------------------------------------
  Global Variables
  ---------------------------------------------*/
  const id = jsonBlock.id;
  const o = jsonBlock.options;
  const r = jsonBlock.records;
  const t = jsonTheme;
  const rCount = r.length;
  !!o.g_style ? "" : (o.g_style = "line");
  const style = o.g_style;
  const mode = !!t.mode ? t.mode : "midnight";
  const cssId = "#" + id;
  const granite_div = document.getElementById(id);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const tabParam = urlParams.get("tab");
  !!o.classes ? granite_div.setAttribute("class", o.classes) : "";
  /*---------------------------------------------
  Verify Div ID and Div Alignment - Set Mode
  ---------------------------------------------*/
  if (granite_div === null) {
    console.error("Object ID and Granite Div ID Do Not Match");
  } else {
    granite_div.setAttribute("mode", mode);
  }
  /*---------------------------------------------
  Add Font Family To Header
  ---------------------------------------------*/
  const font_include = document.getElementById("g__font_stylesheet");
  if (!font_include) {
    var head = document.head;
    var fontLink = document.createElement("link");
    fontLink.type = "text/css";
    fontLink.rel = "stylesheet";
    fontLink.id = "g__font_stylesheet";
    fontLink.href = "https://use.typekit.net/ihq4dbs.css";
    head.appendChild(fontLink);
  }
  /*---------------------------------------------
  Attributes
  ---------------------------------------------*/

  switch (t.mode) {
    case "standard":
      !!o.g_font_color ? "" : (o.g_font_color = "#000000");
      !!o.g_step_number_color ? "" : (o.g_step_number_color = "#000000");
      !!o.g_title_color ? "" : (o.g_title_color = "#000000");
      !!o.g_description_color ? "" : (o.g_description_color = "#000000");
      !!o.g_background_hover_color
        ? ""
        : (o.g_background_hover_color = "#5d5d5d");
      !!o.g_highlight_color ? "" : (o.g_highlight_color = "#bababa");
      !!o.g_background_active_color
        ? ""
        : (o.g_background_active_color = "#5d5d5d");
      !!o.g_border_color ? "" : (o.g_border_color = "#bfbfbf");
      !!o.g_background_color ? "" : (o.g_background_color = "#bfbfbf");
      !!o.g_font_hover_color ? "" : (o.g_font_hover_color = "#a1a1a1");
      break;
    default:
      !!o.g_font_color ? "" : (o.g_font_color = "#ffffff");
      !!o.g_step_number_color ? "" : (o.g_step_number_color = "#ffffff");
      !!o.g_title_color ? "" : (o.g_title_color = "#ffffff");
      !!o.g_description_color ? "" : (o.g_description_color = "#ffffff");
      !!o.g_background_hover_color
        ? ""
        : (o.g_background_hover_color = "#5d5d5d");
      !!o.g_highlight_color ? "" : (o.g_highlight_color = "#bababa");
      !!o.g_background_active_color
        ? ""
        : (o.g_background_active_color = "#5d5d5d");
      !!o.g_border_color ? "" : (o.g_border_color = "#5d5d5d");
      !!o.g_background_color ? "" : (o.g_background_color = "#5d5d5d");
      !!o.g_font_hover_color ? "" : (o.g_font_hover_color = "#a1a1a1");
      break;
  }
  !!o.g_font_size ? "" : (o.g_font_size = "16");
  !!o.g_icon_size ? "" : (o.g_icon_size = "20");
  !!o.g_title_size ? "" : (o.g_title_size = "16");
  !!o.g_description_size ? "" : (o.g_description_size = "14");
  !!o.g_align_icon ? "" : (o.g_align_icon = false);
  !!o.g_border_width ? "" : (o.g_border_width = "0");
  !!o.g_border_radius ? "" : (o.g_border_radius = "0");

  !!o.g_tab_left_padding ? "" : (o.g_tab_left_padding = "15");
  !!o.g_tab_right_padding ? "" : (o.g_tab_right_padding = "15");
  !!o.g_tab_left_margin ? "" : (o.g_tab_left_margin = "0");
  !!o.g_tab_right_margin ? "" : (o.g_tab_right_margin = "0");

  !!o.padding_top ? "" : (o.padding_top = "0");
  !!o.padding_right ? "" : (o.padding_right = "0");
  !!o.padding_bottom ? "" : (o.padding_bottom = "0");
  !!o.padding_left ? "" : (o.padding_left = "0");

  !!o.margin_top ? "" : (o.margin_top = "0");
  !!o.margin_right ? "" : (o.margin_right = "0");
  !!o.margin_bottom ? "" : (o.margin_bottom = "0");
  !!o.margin_left ? "" : (o.margin_left = "0");

  // Mode Defaults
  let bodyBkg = mode === "midnight" ? "#101010" : "#ffffff";
  let tabBkgMode = mode === "midnight" ? "#353535" : "#eaeaea";
  let hoverMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let activeMode = mode === "midnight" ? "#5d5d5d" : "#bfbfbf";
  let fontColorMode = mode === "midnight" ? "#bfbfbf" : "#a1a1a1";
  let fontHoverMode = mode === "midnight" ? "#ffffff" : "#101010";
  let fontActiveMode = mode === "midnight" ? "#ffffff" : "#101010";
  // Design
  let fontColor = o.g_font_color;
  let fontSize = o.g_font_size + "px";
  let titleSize = o.g_title_size + "px";
  let descSize = o.g_description_size + "px";
  let iconSize = o.g_icon_size + "px";
  let fontActiveColor = o.g_highlight_color;

  let titleColor = o.g_title_color;
  let stepNumberColor = o.g_step_number_color;
  let descriptionColor = o.g_description_color;
  let fontHoverColor = o.g_font_hover_color;
  let tabBkg = o.g_background_color;
  let hoverColor = o.g_background_hover_color;
  let activeColor = o.g_background_active_color;
  let borderWidth = o.g_border_width + "px";
  let borderColor = o.g_border_color;
  let borderRadius = o.g_border_radius + "px";
  // Stepper
  let stepSize = o.g_stepSize || "40px";
  let stepConnPos = connPos(stepSize) || "20px";
  // Layout
  let alignTabs = o.g_align_tabs || "center";
  let width = o.g_style === "tabs" ? "inline-flex" : "flex";
  let direction = o.g_direction ? "column" : "row";
  let padding = o.g_padding || "10px 20px";
  let margin = o.g_margin || "0px 5px";
  let alignIcon = o.g_align_icon;

  let leftPadding = o.g_tab_left_padding + "px";
  let rightPadding = o.g_tab_right_padding + "px";
  let leftMargin = o.g_tab_left_margin + "px";
  let rightMargin = o.g_tab_right_margin + "px";
  // Font
  let font = "hero-new, sans-serif;";
  let fontWeight = 300;

  let paddingTop = o.padding_top + "px";
  let paddingRight = o.padding_right + "px";
  let paddingBottom = o.padding_bottom + "px";
  let paddingLeft = o.padding_left + "px";
  let marginTop = o.margin_top + "px";
  let marginRight = o.margin_right + "px";
  let marginBottom = o.margin_bottom + "px";
  let marginLeft = o.margin_left + "px";
  /*---------------------------------------------
  CSS
  ---------------------------------------------*/
  let tabStyles = document.createElement("style");
  tabStyles.id = "g__css_" + id;
  tabStyles.innerHTML = `
    /* ------------------------------
    Granite Div
    -------------------------------*/
    ${cssId}{
      margin-top: ${o.container_top_padding || "25px"};
      margin-bottom: ${o.container_bottom_padding || "25px"};
      position:relative;
      display: flex;
      justify-content: ${alignTabs};
    }
    ${cssId}.g__no_records{
      display: flex;
      justify-content: center;
      background: transparent;
      align-items: center;
      color: ${fontColorMode};
      height: 225px;
      border: 2px dashed #5d5d5d;
    }
    ${cssId}.g__no_records h2{
        font-family: var(--font-regular);
        font-weight: 300;
        font-size: 2rem;
        color: var(--font-color);
    }
    /* ------------------------------------------------------------
    Tabs Container
    -------------------------------------------------------------*/
    ${cssId} .g__tabs_container{
      display: inline-flex;
      flex-direction: ${direction};
      justify-content: space-between;
      padding-top: ${paddingTop};
      padding-right: ${paddingRight};
      padding-bottom: ${paddingBottom};
      padding-left: ${paddingLeft};
      margin-top: ${marginTop};
      margin-right: ${marginRight};
      margin-bottom: ${marginBottom};
      margin-left: ${marginLeft};
    }
    ${cssId} .g__contents-no-transition {
      transition: none;
    }
    ${cssId} .g__tabs_wrapper{
      padding: 15px 0;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      -ms-overflow-style: -ms-autohiding-scrollbar;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
      position: relative;
    }
    ${cssId} .g__tabs_wrapper .g__disabled{
      opacity: .6;
      pointer-events: none;
    }
    ${cssId} .g__tabs_wrapper::-webkit-scrollbar {
      display: none;
    }
    /*--- Line Tabs Container ---*/
    ${cssId} .g__tabs_container.g__tab_line{
      float: left;
      justify-content: start;
      border-bottom: 2px solid ${fontColor};
      transition: transform .2s ease-in-out;
    }
    ${cssId} .pn-ProductNav_Contents-no-transition {
      transition: none;
    }
    ${cssId} .g__ellipsis{
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    /* ------------------------------------------------------------
    Tabs Line
    -------------------------------------------------------------*/
    /*--- Tabs Line ---*/
    ${cssId} .g__tab_line .g__tab_line_wrap{
      display: flex;
      flex-direction: ${alignIcon ? "column" : "row"};
      justify-content: ${alignIcon ? "flex-end" : "center"};
      align-items: center;
      padding-left: ${leftPadding};
      padding-right: ${rightPadding};
    }
    ${cssId} .g__tab_line a.g__tab_line_link{
      display: flex;
      position: relative;
      color: ${fontColor};
      font-size: ${fontSize};
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_line_wrap i{
      margin-right: 10px;
      font-size: ${iconSize};
      color: ${fontColor};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_line .g__tab_line_wrap:hover a.g__tab_line_link,
    ${cssId} .g__tab_line .g__tab_line_wrap:hover i{
      color: ${hoverColor};
    }
    ${cssId} .g__tab_line .g__tab_line_wrap.g__active a.g__tab_line_link,
    ${cssId} .g__tab_line .g__tab_line_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tabLine_line .g__tab_line_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_line{
      border-bottom: 4px solid transparent;
    }
    ${cssId} .g__tab_line .g__active{
      color: ${activeColor};
      border-bottom: 2px solid ${fontActiveColor};
    }
    /* ------------------------------------------------------------
    Tabs Block
    -------------------------------------------------------------*/
    ${cssId} .g__tab_block a.g__tab_block_wrap{
      display: flex;
      flex-direction: ${alignIcon ? "column" : "row"};
      justify-content: ${alignIcon ? "flex-end" : "center"};
      align-items: center;
      position: relative;
      padding-left: ${leftPadding};
      padding-right: ${rightPadding};
      margin-left: ${leftMargin};
      margin-right: ${rightMargin};
      color: ${fontColor};
      border-radius: ${borderRadius};
      border: ${borderWidth} solid ${borderColor};
      text-decoration: none;
      font-size: ${fontSize};
      background: ${tabBkg};
      transition: all .5s ease;
    }
    ${cssId} .g__tab_block .g__tab_block_wrap i{
      font-size: ${iconSize};
      color: ${fontColor};
      margin-right: 5px;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap:hover{
      color: ${fontHoverColor};
      background: ${hoverColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap:hover i{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap.g__active p{
      background: ${activeColor};
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_wrap.g__active i{
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_block a.g__tab_block_link:hover{
      background: #054a5c;
    }
    /* ------------------------------------------------------------
    Chevron
    -------------------------------------------------------------*/
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap{
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-family: ${font};
      font-weight: ${fontWeight};
      color: ${fontColor};
      background: ${tabBkg};
      height: 50px;
      text-align: center;
      padding: 15px 15px 15px 50px;
      position: relative;
      margin-left: 10px;
      text-decoration: none;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover{
      background: ${hoverColor};
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap.g__active{
      background: ${activeColor};
      color: ${fontActiveColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap .g__tab_chevron_text{
      color: ${fontColor};
      margin-bottom: 0;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover .g__tab_chevron_text{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap i{
      color: ${fontColor};
      margin-right: 5px;
    }
    ${cssId} .g__tab_chevron a.g__tab_chevron_wrap:hover i{
      color: ${fontHoverColor};
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:not(:last-child):before {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${bodyBkg};
      top:0px;
      right: -60px;
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${tabBkg};
      top:0px;
      right: -50px;
      transition: all .5s ease;
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap:hover:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${hoverColor};
      top:0px;
      right: -50px;
    }
    ${cssId} .g__tab_chevron .g__tab_chevron_wrap.g__active:not(:last-child):after {
      content: '';
      position: absolute;
      border: 25px solid transparent;
      border-left-color: ${activeColor};
      top:0px;
      right: -50px;
    }
    /* ------------------------------------------------------------
    Stepper
    -------------------------------------------------------------*/
    ${cssId}.g__step_style .g__tabs_wrapper{
      white-space: initial;
    }
    ${cssId} .g__step_container{
      display: flex;
      position: relative;
      text-decoration: none;
    }
    ${cssId} .g__step_container:hover{
      text-decoration: none;
    }
    ${cssId} .g__step{
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${font};
      font-weight: ${fontWeight};
      border-radius: 50%;
      font-size: 21px;
      color: ${stepNumberColor};
      background: ${tabBkg};
      border: ${borderWidth} solid ${borderColor};
      z-index: 5;
      width: ${stepSize};
      height: ${stepSize};
      transition: all .5s ease;
    }
    ${cssId} .g__active .g__step{
      background: ${activeColor};
    }
    ${cssId} .g__complete .g__step{
      background: ${activeColor};
    }
    ${cssId} .g__step:hover{
      background: ${hoverColor};
      transform: scale(1.10);
      cursor: pointer;
    }
    ${cssId} h3.g__step_title{
      color: ${titleColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${titleSize};
      margin-top: 10px;
    }
    ${cssId} p.g__step_desc{
      color: ${descriptionColor};
      font-family: ${font};
      font-weight: ${fontWeight};
      font-size: ${descSize};
    }
    /*---------- Stepper Horizontal ----------*/
    ${cssId} .g__step_horizontal .g__step_container:not(:last-child):after{
      content: "";
      width: calc(100% - ${stepSize});
      height: 3px;
      position: absolute;
      top: ${stepConnPos};
      left: calc(50% + ${stepConnPos});
      background: ${tabBkg};
    }
    ${cssId} .g__step_horizontal .g__complete:not(:last-child):after{
      background: ${activeColor};
    }
    ${cssId} .g__step_horizontal .g__step_container{
      flex-direction: column;
      align-items: center;
      padding: 0 30px;
      flex: 1;
      min-width: 200px;
    }
    ${cssId} .g__step_horizontal h3.g__step_title{
      text-align: center;
    }
    ${cssId} .g__step_horizontal p.g__step_desc{
      text-align: center;
    }
    ${cssId}.g__step_style .pn-advancer {
      top: 25px;
      bottom: initial;
    }
    /*---------- Stepper Vertical ----------*/
    ${cssId} .g__step_vertical .g__step_container:not(:last-child):after{
      content: "";
      height: 100%;
      width: 3px;
      position: absolute;
      top: ${stepSize};
      left: ${stepConnPos};
      background: ${tabBkg};
    }
    ${cssId} .g__step_vertical .g__step_container.g__complete:not(:last-child):after{
      background: ${activeColor};
    }
    ${cssId} .g__step_vertical .g__step_container{
      flex-direction: row;
      height: 150px;
    }
    ${cssId} .g__step_vertical .g__step_content{
      margin-left: 20px;
    }
    ${cssId} .g__step_vertical h3.g__step_title{
      text-align: left;
      margin-top: 0;
    }
    ${cssId} .g__step_vertical p.g__step_desc{
      text-align: left;
    }
    /* ------------------------------
    Advancer Arrows
    -------------------------------*/
    ${cssId} .pn-advancer {
      /* Reset the button */
      appearance: none;
      background: ${bodyBkg};
      font-size: 1.4rem;
      padding: 0 5px;
      border: 0;
      opacity: 0;
      /* Now style it as needed */
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 999;
    }
    ${cssId} .pn-advancer:focus {
      outline: 0;
    }
    ${cssId} .pn-advancer_left {
      left: 0;
      color: ${fontColorMode};
    }
    ${cssId} .pn-advancer_right {
      right: 0;
      color: ${fontColorMode};
    }
    ${cssId} .pn-advancer_icon {
      width: 20px;
      height: 44px;
      fill: #bbb;
    }
    ${cssId} [data-overflowing="both"] ~ .pn-advancer_left,
    ${cssId} [data-overflowing="left"] ~ .pn-advancer_left {
      opacity: 1;
    }
    ${cssId} [data-overflowing="both"] ~ .pn-advancer_right,
    ${cssId} [data-overflowing="right"] ~ .pn-advancer_right {
      opacity: 1;
    }
    `;
  let granite_css = document.getElementById("g__css_" + id);
  if (granite_css) {
    granite_css.remove();
  }
  document.head.appendChild(tabStyles);
  /*---------------------------------------------
    Check for records
    ---------------------------------------------*/
  if (!rCount) {
    granite_div.classList.add("g__no_records");
    granite_div.innerHTML = "<h2>Tabs</h2>";
    return;
  }
  /*---------------------------------------------
    Tabs action row
    ---------------------------------------------*/
  let tabsActionRow = document.createElement("div");
  tabsActionRow.classList.add("g__tabs_action_row");

  if (o.g_action_header) {
    let title = document.createElement("h2");
    title.classList.add("g__title");
    title.innerHTML = o.title;
    tabsActionRow.appendChild(title);
  }
  if (o.g_action_description) {
    let description = document.createElement("p");
    description.classList.add("g__description");
    description.innerHTML = o.description;
    tabsActionRow.appendChild(description);
  }

  /*---------------------------------------------
    Tabs Build
    ---------------------------------------------*/
  granite_div.classList.add("g__" + style + "_style");

  let tabsWrapper = document.createElement("div");
  tabsWrapper.classList.add("g__tabs_wrapper");
  !!o.id ? tabsWrapper.setAttribute("id", o.id) : "";

  let tabsContainer = document.createElement("div");

  tabsContainer.classList.add("g__tabs_container");
  direction === "row"
    ? tabsContainer.classList.add("g__step_horizontal")
    : tabsContainer.classList.add("g__step_vertical");
  if (style === "line") {
    tabsContainer.classList.add("g__tab_line");
  } else if (style === "block") {
    tabsContainer.classList.add("g__tab_block");
  } else if (style === "chevron") {
    tabsContainer.classList.add("g__tab_chevron");
  }
  !!o.classes ? tabsContainer.classList.add(o.classes) : "";
  tabsWrapper.appendChild(tabsContainer);

  //Loop through each record
  r.forEach((r, count) => {
    switch (style) {
      case "step":
        let isComplete = complete(count);
        let stepContainer = document.createElement("a");
        stepContainer.classList.add("g__step_container");
        stepContainer.setAttribute("data-micro-id", id);
        !!r.addapptation_id
          ? stepContainer.setAttribute("data-record-id", r.addapptation_id)
          : "";
        activeTab(r, count) ? stepContainer.classList.add("g__active") : "";
        r.disabled ? stepContainer.classList.add("g__disabled") : "";
        isComplete ? stepContainer.classList.add("g__complete") : "";
        stepContainer.href = tabHref(r.href, count);
        let stepLink = document.createElement("div");
        stepLink.classList.add("g__step");
        stepLink.innerHTML = isComplete
          ? "<i class='far fa-check'></i>"
          : count + 1;
        stepContainer.appendChild(stepLink);
        if (r.name || r.desc) {
          let stepContent = document.createElement("div");
          stepContent.classList.add("g__step_content");
          if (r.name) {
            let stepTitle = document.createElement("h3");
            stepTitle.classList.add("g__step_title");
            stepTitle.innerHTML = r.name;
            stepContent.appendChild(stepTitle);
          }
          if (r.desc) {
            let stepDesc = document.createElement("p");
            stepDesc.classList.add("g__step_desc");
            stepDesc.innerHTML = r.desc;
            stepContent.appendChild(stepDesc);
          }
          stepContainer.appendChild(stepContent);
        }
        tabsContainer.appendChild(stepContainer);
        break;
      case "line":
        let tabLineWrap = document.createElement("div");
        tabLineWrap.classList.add("g__tab_line_wrap");
        tabLineWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id
          ? tabLineWrap.setAttribute("data-record-id", r.addapptation_id)
          : "";
        o.g_align === "left" ? (tabLineWrap.style.paddingLeft = "10px") : "";
        o.g_align === "right" ? (tabLineWrap.style.paddingRight = "10px") : "";
        activeTab(r, count) ? tabLineWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let tabLineIcon = document.createElement("i");
          tabLineIcon.setAttribute("class", r.icon);
          tabLineWrap.appendChild(tabLineIcon);
        }

        let tabLineLink = document.createElement("a");
        tabLineLink.classList.add("g__tab_line_link");
        tabLineLink.href = tabHref(r.href, count);
        tabLineLink.innerHTML = r.name || count;
        tabLineWrap.appendChild(tabLineLink);

        tabsContainer.appendChild(tabLineWrap);
        break;
      case "block":
        let tabWrap = document.createElement("a");
        tabWrap.classList.add("g__tab_block_wrap");
        tabWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id
          ? tabWrap.setAttribute("data-record-id", r.addapptation_id)
          : "";
        tabWrap.href = tabHref(r.href, count);
        o.g_align === "left" ? (tabWrap.style.paddingLeft = "10px") : "";
        o.g_align === "right" ? (tabWrap.style.paddingRight = "10px") : "";
        r.disabled ? tabWrap.classList.add("g__disabled") : "";
        activeTab(r, count) ? tabWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let tabIcon = document.createElement("i");
          tabIcon.setAttribute("class", r.icon);
          tabWrap.appendChild(tabIcon);
        }
        let tabLink = document.createElement("p");
        tabLink.classList.add("g__tab_block_text");
        tabLink.innerHTML = r.name || count;
        tabWrap.appendChild(tabLink);

        tabsContainer.appendChild(tabWrap);
        break;
      case "chevron":
        let chevWrap = document.createElement("a");
        chevWrap.classList.add("g__tab_chevron_wrap");
        chevWrap.setAttribute("data-micro-id", id);
        !!r.addapptation_id
          ? chevWrap.setAttribute("data-record-id", r.addapptation_id)
          : "";
        chevWrap.href = tabHref(r.href, count);
        chevWrap.style.zIndex = (rCount - (count + 1)) * 10;
        r.disabled ? chevWrap.classList.add("g__disabled") : "";
        activeTab(r, count) ? chevWrap.classList.add("g__active") : "";

        if (!!r.icon) {
          let chevIcon = document.createElement("i");
          chevIcon.setAttribute("class", r.icon);
          chevWrap.appendChild(chevIcon);
        }
        let chevLink = document.createElement("p");
        chevLink.classList.add("g__tab_chevron_text");
        chevLink.innerHTML = r.name || count;
        chevWrap.appendChild(chevLink);

        tabsContainer.appendChild(chevWrap);
        break;
      default:
        console.error("no style");
    }
  });

  /*---------------------------------------------
    Append DIV to DOM
    ---------------------------------------------*/
  granite_div.classList.remove("g__no_records");
  granite_div.appendChild(tabsWrapper);

  /*---------------------------------------------
    Advancer Arrows
    ---------------------------------------------*/
  let leftAdvancer = document.createElement("button");
  leftAdvancer.setAttribute("class", "pn-advancer pn-advancer_left");
  leftAdvancer.type = "button";
  leftAdvancer.innerHTML = "<i class='far fa-chevron-left'></i>";
  granite_div.appendChild(leftAdvancer);

  let rightAdvancer = document.createElement("button");
  rightAdvancer.setAttribute("class", "pn-advancer pn-advancer_right");
  rightAdvancer.type = "button";
  rightAdvancer.innerHTML = "<i class='far fa-chevron-right'></i>";
  granite_div.appendChild(rightAdvancer);

  /*---------------------------------------------
    Build HREF
    ---------------------------------------------*/
  function tabHref(href, val) {
    let ival = val + 1;
    let tval = ival;
    if (!!href && href.includes("tab=")) {
      href =
        !!href && href.length
          ? href.includes("?")
            ? href.replace(`tab=${tabParam}`, `tab=${tval}`)
            : href + `?tab=${tval}`
          : queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
    } else {
      if (!!href && href.length) {
        href = href.includes("?")
          ? href + `&tab=${tval}`
          : href + `?tab=${tval}`;
      } else {
        if (queryString.includes("tab=")) {
          var x = queryString.replace(`tab=${tabParam}`, `tab=${tval}`);
        } else {
          var x = queryString.includes("?")
            ? queryString + `&tab=${tval}`
            : queryString + `?tab=${tval}`;
        }
        href = x;
      }
    }
    return href;
  }
  /*---------------------------------------------
    Connector position for step
    ---------------------------------------------*/
  function connPos(stepSize) {
    let size = stepSize.slice(0, -2);
    let fromTop = size / 2 + "px";
    return fromTop;
  }
  /*---------------------------------------------
    Active
    ---------------------------------------------*/
  function activeTab(r, val) {
    let ival = val + 1;
    let href = tabHref(r.href, val);
    let isActive =
      ival == tabParam ||
      (val == 0 && tabParam == null) ||
      (!!tabParam && tabParam.includes(ival));
    return isActive;
  }
  /*---------------------------------------------
    Complete
    ---------------------------------------------*/
  function complete(val) {
    var ival = val + 1;
    var is_complete = ival < tabParam ? true : false;
    return is_complete;
  }
  /*---------------------------------------------
    Overflow Arrows
    ---------------------------------------------*/
  var SETTINGS = {
    navBarTravelling: false,
    navBarDirection: "",
    navBarTravelDistance: 100,
  };
  let gTabsContainer = granite_div.querySelector(".g__tabs_wrapper");
  let gContents = granite_div.querySelector(".g__tabs_container");
  var pnAdvancerLeft = granite_div.querySelector(".pn-advancer_left");
  var pnAdvancerRight = granite_div.querySelector(".pn-advancer_right");
  gTabsContainer.setAttribute(
    "data-overflowing",
    determineOverflow(gContents, gTabsContainer)
  );
  // Handle the scroll of the horizontal container
  var last_known_scroll_position = 0;
  var ticking = false;

  function doSomething(scroll_pos) {
    gTabsContainer.setAttribute(
      "data-overflowing",
      determineOverflow(gContents, gTabsContainer)
    );
  }

  gTabsContainer.addEventListener("scroll", function () {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }
    ticking = true;
  });

  if (!!pnAdvancerLeft) {
    pnAdvancerLeft.addEventListener("click", function () {
      if (SETTINGS.navBarTravelling === true) {
        return;
      }
      if (
        determineOverflow(gContents, gTabsContainer) === "left" ||
        determineOverflow(gContents, gTabsContainer) === "both"
      ) {
        var availableScrollLeft = gTabsContainer.scrollLeft;
        if (availableScrollLeft < SETTINGS.navBarTravelDistance * 2) {
          gContents.style.transform =
            "translateX(" + availableScrollLeft + "px)";
        } else {
          gContents.style.transform =
            "translateX(" + SETTINGS.navBarTravelDistance + "px)";
        }
        gContents.classList.remove("g__contents-no-transition");
        SETTINGS.navBarTravelDirection = "left";
        SETTINGS.navBarTravelling = true;
      }
      gTabsContainer.setAttribute(
        "data-overflowing",
        determineOverflow(gContents, gTabsContainer)
      );
      arrowReset();
    });
  }

  if (!!pnAdvancerRight) {
    pnAdvancerRight.addEventListener("click", function () {
      if (SETTINGS.navBarTravelling === true) {
        return;
      }
      if (
        determineOverflow(gContents, gTabsContainer) === "right" ||
        determineOverflow(gContents, gTabsContainer) === "both"
      ) {
        var navBarRightEdge = gContents.getBoundingClientRect().right;
        var navBarScrollerRightEdge =
          gTabsContainer.getBoundingClientRect().right;
        var availableScrollRight = Math.floor(
          navBarRightEdge - navBarScrollerRightEdge
        );
        if (availableScrollRight < SETTINGS.navBarTravelDistance * 2) {
          gContents.style.transform =
            "translateX(-" + availableScrollRight + "px)";
        } else {
          gContents.style.transform =
            "translateX(-" + SETTINGS.navBarTravelDistance + "px)";
        }
        gContents.classList.remove("g__contents-no-transition");
        SETTINGS.navBarTravelDirection = "right";
        SETTINGS.navBarTravelling = true;
      }
      // Now update the attribute in the DOM
      gTabsContainer.setAttribute(
        "data-overflowing",
        determineOverflow(gContents, gTabsContainer)
      );
      arrowReset();
    });
  }

  function arrowReset() {
    var styleOfTransform = window.getComputedStyle(gContents, null);
    var tr =
      styleOfTransform.getPropertyValue("-webkit-transform") ||
      styleOfTransform.getPropertyValue("transform");
    var amount = Math.abs(parseInt(tr.split(",")[4]) || 0);
    gContents.style.transform = "none";
    gContents.classList.add("g__contents-no-transition");
    if (SETTINGS.navBarTravelDirection === "left") {
      gTabsContainer.scrollLeft = gTabsContainer.scrollLeft - amount;
    } else {
      gTabsContainer.scrollLeft = gTabsContainer.scrollLeft + amount;
    }
    SETTINGS.navBarTravelling = false;
  }

  function determineOverflow(content, container) {
    var containerMetrics = container.getBoundingClientRect();
    var containerMetricsRight = Math.floor(containerMetrics.right);
    var containerMetricsLeft = Math.floor(containerMetrics.left);
    var contentMetrics = content.getBoundingClientRect();
    var contentMetricsRight = Math.floor(contentMetrics.right);
    var contentMetricsLeft = Math.floor(contentMetrics.left);
    if (
      containerMetricsLeft > contentMetricsLeft &&
      containerMetricsRight < contentMetricsRight
    ) {
      return "both";
    } else if (contentMetricsLeft < containerMetricsLeft) {
      return "left";
    } else if (contentMetricsRight > containerMetricsRight) {
      return "right";
    } else {
      return "none";
    }
  }

  // End main function
}

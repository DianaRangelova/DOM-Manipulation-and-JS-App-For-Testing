window.addEventListener("load", solve);

function solve() {
  let snowmanNameElement = document.getElementById("snowman-name");
  let snowmanHeightElement = document.getElementById("snowman-height");
  let locationElement = document.getElementById("location");
  let creatorNameElement = document.getElementById("creator-name");
  let attributeElement = document.getElementById("special-attribute");
  let addbtnElement = document.querySelector(".add-btn");
  let snowListElement = document.querySelector(".snowman-preview");
  let showSnowmanElement = document.querySelector(".snow-list");
  let main = document.getElementById("hero");
  let bodyElement = document.querySelector(".body");
  let backImg = document.getElementById('back-img');

  addbtnElement.addEventListener("click", onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (
      snowmanNameElement.value == "" ||
      snowmanHeightElement.value == "" ||
      locationElement.value == "" ||
      creatorNameElement.value == "" ||
      attributeElement.value == ""
    ) {
      return;
    }

    // Create paragraph elements for the snowman detail list
    let articleElementInfo = document.createElement("article");
    let liElementInfo = document.createElement("li");
    liElementInfo.setAttribute("class", "snowman-info");
    let btnContainer = document.createElement("div");
    btnContainer.setAttribute("class", "btn-container");

    // Create paragraph elements for the snowman detail list
    let snowmanName = document.createElement("p");
    snowmanName.textContent = `Name: ${snowmanNameElement.value}`;

    let snowmanHeght = document.createElement("p");
    snowmanHeght.textContent = `Height: ${snowmanHeightElement.value}`;

    let location = document.createElement("p");
    location.textContent = `Location: ${locationElement.value}`;

    let creator = document.createElement("p");
    creator.textContent = `Creator: ${creatorNameElement.value}`;

    let attribute = document.createElement("p");
    attribute.textContent = `Attribute: ${attributeElement.value}`;

    // Create button elements for the Edit and Next buttons
    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nextBtn = document.createElement("button");
    nextBtn.setAttribute("class", "next-btn");
    nextBtn.textContent = "Next";

    // add all fields and buttons to the snowman article element
    articleElementInfo.appendChild(snowmanName);
    articleElementInfo.appendChild(snowmanHeght);
    articleElementInfo.appendChild(location);
    articleElementInfo.appendChild(creator);
    articleElementInfo.appendChild(attribute);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(nextBtn);

    liElementInfo.appendChild(articleElementInfo);
    liElementInfo.appendChild(btnContainer);

    snowListElement.appendChild(liElementInfo);
    
    // Save filled in fields in let variables and reset form
    let editedSnowmanName = snowmanNameElement.value;
    let editedHeght = snowmanHeightElement.value;
    let editedLocation = locationElement.value;
    let editedCreator = creatorNameElement.value;
    let editedAttribute = attributeElement.value;

    // Reset form
    snowmanNameElement.value = "";
    snowmanHeightElement.value = "";
    locationElement.value = "";
    creatorNameElement.value = "";
    attributeElement.value = "";

    addbtnElement.disabled = true;

    // On Edit functionallity
    editBtn.addEventListener("click", onEdit);

    function onEdit() {
      snowmanNameElement.value = editedSnowmanName;
      snowmanHeightElement.value = editedHeght;
      locationElement.value = editedLocation;
      creatorNameElement.value = editedCreator;
      attributeElement.value = editedAttribute;

      liElementInfo.remove();
      addbtnElement.disabled = false;
    }

    // Add nex button finctionallity
    nextBtn.addEventListener("click", onNext);

    function onNext() {
      // Create confirm element container to store the final snowman data
      let liElementconfirm = document.createElement("li");
      liElementconfirm.setAttribute("class", "snowman-content");

      // Create article element to store the send button
      let articleElementContinue = document.createElement("article");
      articleElementContinue = articleElementInfo;

      // Create send button
      let sendBtn = document.createElement("button");
      sendBtn.setAttribute("class", "send-btn");
      sendBtn.textContent = "Send";

      // Add send button to the article element and the article element to the li element
      articleElementContinue.appendChild(sendBtn);
      liElementconfirm.appendChild(articleElementContinue);

      // Remove the li element where the data were stored
      liElementInfo.remove();

      // Add the element with the whole data and button to the existing element
      showSnowmanElement.appendChild(liElementconfirm);

      // Logic on click send button
      sendBtn.addEventListener("click", onConfirm);
      function onConfirm() {
        // Remove main element 
        main.remove();
        // Create Back button
        let backBtn = document.createElement("button");
        backBtn.setAttribute("class", "back-btn");
        backBtn.textContent = "Back";
        // Make back image visible
        backImg.hidden = false;

        // Add back button to the boyd element
        bodyElement.appendChild(backBtn);

        backBtn.addEventListener("click", onBack);
        function onBack() {
          window.location.reload();
        }
      }
    }
  }
}

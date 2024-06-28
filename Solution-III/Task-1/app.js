window.addEventListener('load', solve);

function solve() {

    // Initial map of elements

const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const placeElement = document.getElementById('place');
const eventElement = document.getElementById('event-name');
const emailElement = document.getElementById('email');
const addButtonElement = document.getElementById('add-btn');
const checkListElement = document.getElementById('check-list');
const upcomingListElement = document.getElementById('upcoming-list');
const finishedListElement = document.getElementById('finished-list');
const cancelBtn = document.getElementById('clear')


// Add eventlistener for clicking add event button


        addButtonElement.addEventListener('click', onNext);

        function onNext(e) {
            e.preventDefault();
            if(timeElement.value == ''
            || placeElement.value == ''
            || eventElement.value == ''
            || emailElement.value == ''
            || dateElement.value == ''
            ){
             return;
            }

            // Building li element with all children inside

            let liElementInfo = document.createElement('li');
            liElementInfo.setAttribute('class', 'event-content');

            let articleElementInfo = document.createElement("article");

            let time = document.createElement('p');
            time.textContent = `Begins: ${dateElement.value} at: ${timeElement.value}`;

            let place = document.createElement('p');
            place.textContent = `In: ${placeElement.value}`;

            let event = document.createElement('p');
            event.textContent = `Event: ${eventElement.value}`;

            let email = document.createElement('p');
            email.textContent = `Contact: ${emailElement.value}`;


            let editBtn = document.createElement("button");
            editBtn.setAttribute('class', 'edit-btn');
            editBtn.textContent = 'Edit';

            let continueBtn = document.createElement("button");
            continueBtn.setAttribute('class', 'continue-btn');
            continueBtn.textContent = 'Continue';


            articleElementInfo.appendChild(time);
            articleElementInfo.appendChild(place);
            articleElementInfo.appendChild(event);
            articleElementInfo.appendChild(email);

            liElementInfo.appendChild(articleElementInfo);
            liElementInfo.appendChild(editBtn);
            liElementInfo.appendChild(continueBtn);

            checkListElement.appendChild(liElementInfo);

            // Save the data in variables so we won't lose it

        let editedtimeElement = timeElement.value;
        let editeddateElement = dateElement.value;
        let editedplaceElement = placeElement.value;
        let editedeventElement = eventElement.value;
        let editedemailElement = emailElement.value; 

        // Clear all inputs
        
        timeElement.value = '';
        dateElement.value = '';
        placeElement.value = '';
        eventElement.value = '';
        emailElement.value = '';

        addButtonElement.disabled = true;

        // Logic for Edit button

        editBtn.addEventListener("click", onEdit);

        function onEdit() {

            timeElement.value = editedtimeElement;
            dateElement.value = editeddateElement;
            placeElement.value = editedplaceElement;
            eventElement.value = editedeventElement;
            emailElement.value = editedemailElement;
            
            
            liElementInfo.remove();
            addButtonElement.disabled = false;
        }

        // Logic for Continue button

        continueBtn.addEventListener("click", onContinue);

        function onContinue() {
            let liElementconfirm = document.createElement('li');
            liElementconfirm.setAttribute('class', 'event-content');

            let articleElementContinue = document.createElement("article");
            articleElementContinue = articleElementInfo;

            let confirmBtn = document.createElement("button");
            confirmBtn.setAttribute('class', 'finished-btn');
            confirmBtn.textContent = 'Move to Finished';
    
    
            liElementconfirm.appendChild(articleElementContinue);
            liElementconfirm.appendChild(confirmBtn);

            // Remove buttons Edit and Continue from li element in Last Check section
            liElementInfo.remove();
    
            upcomingListElement.appendChild(liElementconfirm);
            addButtonElement.disabled = false;
            

            // Logic for Move to finish (On Confirm) button
            confirmBtn.addEventListener('click', onConfirm);
        function onConfirm() {

            let liElementResolved = document.createElement('li');
            liElementResolved.setAttribute('class', 'event-content');

            let articleElementResolved = document.createElement("article");
            articleElementResolved = articleElementContinue;
           
            const cancelBtn = document.getElementById('clear')
            cancelBtn.addEventListener('click', onCancel);

            liElementResolved.appendChild(articleElementResolved);

            // Remove button Move to finish from li element in Upcoming section
            liElementconfirm.remove();

            // Add logic for Clear button in Finished section
            // Option 2: clearButtonElement.addeventListener('click', onCancel);

            finishedListElement.appendChild(liElementResolved);

            function onCancel() {
                liElementResolved.remove();
                addButtonElement.disabled = false;
            }
        }
      
        
        };


        }   
}


    
    

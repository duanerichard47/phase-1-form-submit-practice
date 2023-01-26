
const profileForm = document.querySelector('#profile-form')
const userInputName = document.querySelector('#profile-name-input')
const userInputDesc = document.querySelector('#profile-description-input')
const profileName = document.querySelector('#profile-name')
const profileDesc = document.querySelector('#profile-description')

profileForm.addEventListener ('submit', event=>{
    event.preventDefault()
    profileName.textContent= userInputName.value
    profileDesc.textContent = userInputDesc.value

profileForm.reset()
})
//## First Deliverable -end


const activityForm = document.querySelector('#activity-form')



activityForm.addEventListener ('submit', event=>{
    event.preventDefault()

    const activitiesContainer = document.querySelector('#activities-container')
const activityInput = document.querySelector('#activity-input')
activitiesContainer.textContent = activityInput.value


    activityForm.reset()
})
//## Second Deliverable -end


const coolPointForm = document.querySelector('#cool-points-form')


coolPointForm.addEventListener ('submit', event =>{
    event.preventDefault()

 let coolPointsSpan = document.querySelector('#cool-points')  

 coolPointsSpan.textContent += event.target.children[1].value  //3?
     coolPointForm.reset()
})
//## Third Deliverable - end

const coolMuliplyerForm = document.querySelector('#cool-multiplier-form')
coolMuliplyerForm.addEventListener ('submit', event =>{
    event.preventDefault()

 let coolPointsSpan = document.querySelector('#cool-points')  

 coolPointsSpan.textContent = coolPointsSpan.textContent * event.target.children[1].value //3?
 coolMuliplyerForm.reset()
})
//## Fourth Deliverable -end

const pictureForm = document.querySelector('#picture-form')

pictureForm.addEventListener('submit', event =>{
        event.preventDefault()

        const pictureContainer = document.querySelector('#pictures-container')
        const deleteimg = document.querySelector('#pictures-container').children[0]
        deleteimg.remove()
        const imgage = document.createElement('img')
        imgage.src = document.querySelector('#picture-form').children[1].value
        pictureContainer.append(imgage)

        pictureForm.reset()
})

//## Fifth Deliverable

/*
## First Deliverable

For the `#profile-form` when a user submits, it replaces the contents of `#profile-name` and `#profile-description` with whatever the user typed into `#profile-name-input` and `#profile-description-input`

## Second Deliverable

When the `#activity-form` gets submitted, it adds the a new activity as a `<p>` tag to the `#activities-container`.

## Third Deliverable

When the `#cool-point-form` is submitted, it adds to the `#cool-points` span.

## Fourth Deliverable

When the `#cool-multiplier-form` is submitted, it multiplies the number of cool points in `#cool-points` by the submitted amount.

## Fifth Deliverable

When the `#picture-form` is submitted it takes the submitted URL and creates and appends a new `<img>` that shows the picture for the URL.


*/







const btnEl = document.getElementById("btn")
const birthdayEl = document.getElementById("date_box")

function calculateAge()
{
    const birthdayValue = birthdayEl.value;

    if (birthdayValue === "")
    {
        alert("please enter your birthday!");
    }

    const age = getAge(birthdayValue);

    console.log(birthdayValue);
}

function getAge(birthdayValue)
{
    
}

btnEl.addEventListener("click", calculateAge)
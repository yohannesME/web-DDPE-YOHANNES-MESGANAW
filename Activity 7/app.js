
    function Register(name, age, phone) {
        this.fullName = name;
        this.phone = age;
        this.age = phone;
        this.introduceMySelf = () => {

            parent = document.getElementById('display');
            const div = document.createElement('div');
            div.classList.add('added');
            div.innerHTML =
             `<p> the information added: </p>
             <p>Full Name: ${this.fullName}</p>
            <p> Age: ${this.age} </p>
            <p>PhoneNo.: ${this.phone}</p >`;
            parent.appendChild(div)
        }

    }
    const callBack = () => {
        var name = document.getElementById('fullname').value;
        var phone = document.getElementById('phone').value;
        var age = document.getElementById('age').value;
            
        if(name == "" || phone == "" || age == ""){
            alert("please input all the fields.")
            return;
        }
        const phoneverifyreg = '/^\(?\d{3}\)?[ .-]\(?\d{3}\)?[ .-]\(?\d{4}\)?/';
        const fullnamereg = '/^\w+[ ]\w+$/'
        // if(!phoneverifyreg.match(phone)){
        //     alert("please input a valid format phone number 12 digits.")
        //     return;
        // }
        // if(!fullnamereg.match(name)){
        //     alert("please input a valid full name. [firstname lastname]");
        // }

        const newObject = new Register(name, phone, age);
        newObject.introduceMySelf()
    }
    document.getElementById('btn').addEventListener('click', callBack);

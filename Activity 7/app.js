
    function Register(name, age, phone) {
        this.fullName = name;
        this.phone = age;
        this.age = phone;
        this.introduceMySelf = () => {
            parent = document.getElementById('display');
            const div = document.createElement('div');
            div.classList.add('appended');
            div.innerHTML = `<h1> Newly Added Form </h1><h1>Full Name: ${this.fullName}</h1>
            <h1> Age: ${this.age} </h1><h1>PhoneNo.: ${this.phone}</h1 >`;
            parent.appendChild(div)
        }

    }
    const callBack = () => {
        var name = document.getElementById('fullname').value;
        var fullname = document.getElementById('phone').value;
        var age = document.getElementById('age').value;

        const newObject = new Register(name, fullname, age);
        newObject.introduceMySelf()
    }
    document.getElementById('btn').addEventListener('click', callBack);

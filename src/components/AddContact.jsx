import React from "react";

class AddContact extends React.Component {
    state = {
        mobno: "",
        email: "",
        name: "",
        id: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.mobno === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: "", mobno: "", email: "", id:"" });

        this.setState({ id: this.props.contacts.length++});

    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label >Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label >Mobile Number</label>
                        <input type="tel" name="Mobileno." placeholder="Mobile Number" value={this.state.mobno} onChange={(e) => this.setState({ mobno: e.target.value })} />
                    </div>

                    <div className="field">
                        <label >Email</label>
                        <input type="email" name="Email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button type="submit" className="ui button blue">Add</button>
                </form>
            </div>

        );
    }
}

export default AddContact;
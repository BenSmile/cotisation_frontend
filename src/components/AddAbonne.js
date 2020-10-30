import React, { Component } from 'react';
import AbonneService from '../services/AbonneService';


export default class AddAbonne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nom: "",
            postnom: "",
            age: "",
            sexe: "",
            telephone: "",
            message : ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancel = this.cancel.bind(this);
    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    cancel(e) {
        this.props.history.push("/abonnes")
    }


    onSubmit(e) {
        e.preventDefault();

        const newAbonnee = {
            nom: this.state.nom,
            postnom: this.state.postnom,
            age: this.state.age,
            sexe: this.state.sexe,
            telephone: this.state.telephone
        }

        AbonneService.addAbonne(newAbonnee).then(res =>{
            this.setState({ message : res.message});
        })
        console.log("Abonne : ", this.state.message);

        // const newProjectTask = {
        //     summary: this.state.summary,
        //     acceptanceCriteria: this.state.acceptanceCriteria,
        //     status: this.state.status
        // }

        // this.props.addProjectTask(newProjectTask, this.props.history)
    }

    render() {
        return (
            <div>
                <div className="container">

                    <div className="now">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h1>Add abonne</h1>
                            <form>
                                <div className="form-group">
                                    <input value={this.state.nom} onChange={this.onChange} type="text" className="form-control form-control-lg" name="nom" placeholder="Nom" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.postnom} onChange={this.onChange} type="text" className="form-control form-control-lg" name="postnom" placeholder="Postnom" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.age} onChange={this.onChange} type="text" className="form-control form-control-lg" name="age" placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.telephone} onChange={this.onChange} type="text" className="form-control form-control-lg" name="telephone" placeholder="Telephone" />
                                </div>
                                <div className="form-group">
                                    <select value={this.state.sexe} onChange={this.onChange} className="form-control form-control-lg" name="sexe">
                                        <option value="">Sexe</option>
                                        <option value="M">M</option>
                                        <option value="F">F</option>
                                        
                                    </select>
                                </div>

                              
                                    <input type="submit" onClick={this.onSubmit} className="btn btn-success " style={{marginRight: "50px"}} value="Save"/>
                                    <input type="submit"  onClick={this.cancel}  className="btn btn-danger " value="Cancel" />
                              


                            </form>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

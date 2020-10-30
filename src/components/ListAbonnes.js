import React, { Component } from 'react';
import AbonneService from '../services/AbonneService';
import { Link } from "react-router-dom";


export default class ListAbonnes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            abonnes :  []
        }
    }

    componentDidMount(){
        AbonneService.getAbonnes().then( (res) => {

            console.log(res.data.data)
            this.setState({abonnes : res.data.data})
        })
    }


    render() {
        AbonneService.getAbonnes();
        return (

            
            <di>
                <h2 className="text-center">Abonnes</h2>

                <div className="row">
                <Link to="/addAbonne" className="btn btn-primary mb-3">
                    <i className="fa fa-plus-circle"> Create Abonne</i>
                </Link>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <td>Nom</td>
                            <td>postnom</td>
                            <td>Age</td>
                            <td>Genre</td>
                            <td>Telephone</td>
                            <td>Actions</td>
                        </thead>
                        <tbody>
                            {
                                this.state.abonnes.map(abonne => 
                                    <tr key={abonne.id}>
                                        <td>{abonne.nom}</td>
                                        <td>{abonne.postnom}</td>
                                        <td>{abonne.age}</td>
                                        <td>{abonne.sexe}</td>
                                        <td>{abonne.telephone}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </di>
        )
    }
}

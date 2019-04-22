import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';

export default class CadastroDefeito extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <center><h4>Registrar Defeito</h4></center>

                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nº Projeto:* </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>

                    <div className="form-group">
                        <label>Funcionalidade:* </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                        <label>Cenário:* </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                        <label>Resultado Obtido:* </label>
                        <textarea className="form-control rounded-0" 
                                   rows="2"
                                   value={this.state.todo_responsible}
                                   onChange={this.onChangeTodoResponsible}/>
                    </div>

                    <div className="form-group">
                        <label>Resultado Esperado:* </label>
                        <textarea className="form-control rounded-0" 
                                   rows="2"
                                   value={this.state.todo_responsible}
                                   onChange={this.onChangeTodoResponsible}/>
                    </div>

                    <label>Gravidade:* </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoGravidade"
                                    id="gravidadeCritico"
                                    value="critico"
                                    checked={this.state.todo_priority==='critico'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Crítico</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoGravidade"
                                    id="gravidadeAlto"
                                    value="alto"
                                    checked={this.state.todo_priority==='alto'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Alto</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoGravidade"
                                    id="gravidadeMedio"
                                    value="medio"
                                    checked={this.state.todo_priority==='medio'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Médio</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoGravidade"
                                    id="gravidadeBaixo"
                                    value="baixo"
                                    checked={this.state.todo_priority==='baixo'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Baixo</label>
                        </div>
                    </div>

                    <label>Prioridade:* </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoPrioridade"
                                    id="prioridadeAlto"
                                    value="alto"
                                    checked={this.state.todo_priority==='alto'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Alto</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoPrioridade"
                                    id="prioridadeMedio"
                                    value="medio"
                                    checked={this.state.todo_priority==='medio'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Médio</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="opcaoPrioridade"
                                    id="prioridadeBaixo"
                                    value="baixo"
                                    checked={this.state.todo_priority==='baixo'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Baixo</label>
                        </div>
                    </div>

                    <label>Atribuir a:* </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                        <select id="inputState" className="form-control">
                            <option selected>...</option>
                            <option>Cleison Oliveira</option>
                            <option>Clezia Oliveira</option>
                            <option>Klevia Pires</option>
                        </select>
                        </div>
                    </div>

                    <label>Status:* </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                        <select id="inputState" className="form-control">
                            <option selected>Novo</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Evidência: </label>
                        <input type="file" className="form-control"/>
                    </div>

                    <div className="form-group" style={{float: "right"}}>
                        <input type="submit" value="Cancelar" className="btn btn-primary" />
                        <input type="submit" value="Salvar" style={{margin: 3}} className="btn btn-primary" />                  
                    </div>
                </form>


            </div>
        )
    }
}
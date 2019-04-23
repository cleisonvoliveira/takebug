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
            <div>
                <div className="text-center font-weight-bolder p-3">
                   Registrar Defeito
                </div>
                

                <form onSubmit={this.onSubmit}>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Nº Projeto:* </label>
                        <div class="col-sm-10">
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_description}
                                    onChange={this.onChangeTodoDescription}
                                    />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Funcionalidade:* </label>
                        <div class="col-sm-10">
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}
                                    />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Cenário:* </label>
                        <div class="col-sm-10"> 
                            <input  type="text"
                                    className="form-control"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}
                                    />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Resultado Obtido:* </label>
                        <div class="col-sm-10"> 
                            <textarea className="form-control rounded-0" 
                                    rows="2"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Resultado Esperado:* </label>
                        <div class="col-sm-10">
                            <textarea className="form-control rounded-0" 
                                    rows="2"
                                    value={this.state.todo_responsible}
                                    onChange={this.onChangeTodoResponsible}/>
                        </div>
                    </div>

                    <div className="form-group row"> 
                    <label className="col-sm-2 col-form-label">Gravidade:* </label>
                    <div class="col-sm-10">
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

                    <div className="form-group float-right clearfix">
                        <input type="submit" value="Cancelar" className="btn btn-primary" />
                        <input type="submit" value="Salvar" style={{margin: 3}} className="btn btn-primary" />                  
                    </div>
                </form>


            </div>
        )
    }
}
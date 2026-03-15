import "./Cadastros.css"
import axios from "axios";
import { useState, useEffect } from "react";

function Cadastros() {
    const apiBaseUrl = process.env.REACT_APP_API_URL ?? "http://localhost:5119";

    const [pessoa, setPessoa] = useState(null);
    const [animal, setAnimal] = useState(null);
    const [produto, setProduto] = useState(null);
    const [clientes, setClientes] = useState([]);
    const [animais, setAnimais] = useState([]);
    const [produtos, setProdutos] = useState([]);

    function getClientes() {
        axios.get(`${apiBaseUrl}/pessoas`)
            .then((resposta) => {
                setClientes(resposta.data);
            });
    }

    function getAnimais() {
        axios.get(`${apiBaseUrl}/animais`)
            .then((resposta) => {
                setAnimais(resposta.data);
            });
    }

    function getProdutos() {
        axios.get(`${apiBaseUrl}/produtos`)
            .then((resposta) => {
                setProdutos(resposta.data);
            });
    }

    useEffect(() => {
        getClientes();
        getAnimais();
        getProdutos();
    }, []);

    function novoCadastro(tipo) {
        if (tipo === "cliente") {
            setPessoa({
                nome: "",
                telefone: "",
                email: ""
            });
        } else if (tipo === "animal") {
            setAnimal({
                nomeAnimal: "",
                raca: "",
                porte: ""
            });
        } else if (tipo === "produto") {
            setProduto({
                nomeProduto: "",
                descricao: "",
                preco: ""
            });
        }
    }

    function cancelar(tipo) {
        if (tipo === "cliente") {
            setPessoa(null);
        } else if (tipo === "animal") {
            setAnimal(null);
        } else if (tipo === "produto") {
            setProduto(null);
        }
    }

    function refresh() {
        cancelar("cliente");
        cancelar("animal");
        cancelar("produto");
        getClientes();
        getAnimais();
        getProdutos();
    }

    function onChangeCadastro(campo, valor, tipo) {
        if (tipo === "cliente") {
            pessoa[campo] = valor;
            setPessoa({
                ...pessoa,
            });
        } else if (tipo === "animal") {
            animal[campo] = valor;
            setAnimal({
                ...animal,
            });
        } else if (tipo === "produto") {
            produto[campo] = valor;
            setProduto({
                ...produto,
            });
        }
    }

    function salvarCadastro(tipo) {
        if (tipo === "cliente") {
            if (pessoa.id) {
                axios.put(`${apiBaseUrl}/pessoas/${pessoa.id}`, pessoa)
                    .then(() => {
                        refresh();
                    });
            } else {
                axios.post(`${apiBaseUrl}/pessoas`, pessoa)
                    .then(() => {
                        refresh();
                    });
            }
        } else if (tipo === "animal") {
            if (animal.id) {
                axios.put(`${apiBaseUrl}/animais/${animal.id}`, animal)
                    .then(() => {
                        refresh();
                    });
            } else {
                axios.post(`${apiBaseUrl}/animais`, animal)
                    .then(() => {
                        refresh();
                    });
            }
        } else if (tipo === "produto") {
            if (produto.id) {
                axios.put(`${apiBaseUrl}/produtos/${produto.id}`, produto)
                    .then(() => {
                        refresh();
                    });
            } else {
                axios.post(`${apiBaseUrl}/produtos`, produto)
                    .then(() => {
                        refresh();
                    });
            }
        }
    }

    function getFormulario(tipo) {
        if (tipo === "cliente") {
            return (
                <form>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome"
                        value={pessoa.nome}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "cliente");
                        }}
                    />
                    <label htmlFor="telefone">Telefone</label>
                    <input type="text" id="telefone" name="telefone"
                        value={pessoa.telefone}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "cliente");
                        }}
                    />
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email"
                        value={pessoa.email}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "cliente");
                        }}
                    />
                    <button type="button" onClick={() => salvarCadastro("cliente")}>Salvar</button>
                    <button type="button" onClick={() => cancelar("cliente")}>Cancelar</button>
                </form>
            );
        } else if (tipo === "animal") {
            return (
                <form>
                 <label htmlFor="nomeAnimal">Nome</label>
                    <input type="text" id="nomeAnimal" name="nomeAnimal"
                        value={animal.nomeAnimal}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "animal");
                        }}
                    />
                    <label htmlFor="raca">Raca</label>
                    <input type="text" id="raca" name="raca"
                        value={animal.raca}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "animal");
                        }}
                    />
                    <label htmlFor="porte">Porte</label>
                    <input type="text" id="porte" name="porte"
                        value={animal.porte}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "animal");
                        }}
                    />
                    <button type="button" onClick={() => salvarCadastro("animal")}>Salvar</button>
                    <button type="button" onClick={() => cancelar("animal")}>Cancelar</button>
                </form>
            );
        } else if (tipo === "produto") {
            return (
                <form>
                    <label htmlFor="nomeProduto">Nome</label>
                    <input type="text" id="nomeProduto" name="nomeProduto"
                        value={produto.nomeProduto}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "produto");
                        }}
                    />
                    <label htmlFor="descricao">Descricao</label>
                    <input type="text" id="descricao" name="descricao"
                        value={produto.descricao}
                        onChange={(e) => {
                            onChangeCadastro(e.target.name, e.target.value, "produto");
                        }}
                    />
                        <label htmlFor="preco">Preco</label>
                        <input type="text" id="preco" name="preco"
                            value={produto.preco}
                            onChange={(e) => {
                                onChangeCadastro(e.target.name, e.target.value, "produto");
                            }}
                        />
                    <button type="button" onClick={() => salvarCadastro("produto")}>Salvar</button>
                    <button type="button" onClick={() => cancelar("produto")}>Cancelar</button>
                </form>
            );
        }
    }

    function excluirCadastro(id, tipo) {
        if (tipo === "cliente") {
            axios.delete(`${apiBaseUrl}/pessoas/${id}`).then(
                () => {
                    getClientes();
                }
            );
        } else if (tipo === "animal") {
            axios.delete(`${apiBaseUrl}/animais/${id}`).then(
                () => {
                    getAnimais();
                }
            );
        } else if (tipo === "produto") {
            axios.delete(`${apiBaseUrl}/produtos/${id}`).then(
                () => {
                    getProdutos();
                }
            );
        }
    }

    function editarCadastro(cadastro, tipo) {
        if (tipo === "cliente") {
            setPessoa(cadastro);
        } else if (tipo === "animal") {
            setAnimal(cadastro);
        } else if (tipo === "produto") {
            setProduto(cadastro);
        }
    }

    function getLinha(cadastro, tipo) {
        if (tipo === "cliente") {
            return (
                <tr key={cadastro.id}>
                    <td>{cadastro.id}</td>
                    <td>{cadastro.nome}</td>
                    <td>{cadastro.telefone}</td>
                    <td>{cadastro.email}</td>
                    <td>
                        <button onClick={() => excluirCadastro(cadastro.id, "cliente")}>Excluir</button>
                        <button onClick={() => editarCadastro(cadastro, "cliente")}>Editar</button>
                    </td>
                </tr>
            );
        } else if (tipo === "animal") {
            return (
                <tr key={cadastro.id}>
                    <td>{cadastro.id}</td>
                    <td>{cadastro.nomeAnimal}</td>
                    <td>{cadastro.raca}</td>
                    <td>{cadastro.porte}</td>
                    <td>
                        <button onClick={() => excluirCadastro(cadastro.id, "animal")}>Excluir</button>
                        <button onClick={() => editarCadastro(cadastro, "animal")}>Editar</button>
                    </td>
                </tr>
            );
                } else if (tipo === "produto") {
            return (
                <tr key={cadastro.id}>
                    <td>{cadastro.id}</td>
                    <td>{cadastro.nomeProduto}</td>
                    <td>{cadastro.descricao}</td>
                    <td>{cadastro.preco}</td>
                    <td>
                        <button onClick={() => excluirCadastro(cadastro.id, "produto")}>Excluir</button>
                        <button onClick={() => editarCadastro(cadastro, "produto")}>Editar</button>
                    </td>
                </tr>
            );
        }
    }

    return (
        <div>
            <h1>Cadastro de Clientes</h1>
            <button onClick={() => novoCadastro("cliente")}>Novo Cliente</button>
            {pessoa && getFormulario("cliente")}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => getLinha(cliente, "cliente"))}
                </tbody>
            </table>

            <h1>Cadastro de Animais</h1>
            <button onClick={() => novoCadastro("animal")}>Novo Animal</button>
            {animal && getFormulario("animal")}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Raca</th>
                        <th>Porte</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {animais.map((animal) => getLinha(animal, "animal"))}
                </tbody>
            </table>

            <h1>Cadastro de Produtos</h1>
            <button onClick={() => novoCadastro("produto")}>Novo Produto</button>
            {produto && getFormulario("produto")}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Preco</th>
                        <th>Acoes</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => getLinha(produto, "produto"))}
                </tbody>
            </table>
        </div>
    );
}

export default Cadastros;


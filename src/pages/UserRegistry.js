import React, { Component, useState } from 'react';
import Navbar from '../components/Navbar';
import UserRegistryStyle from '../styles/userRegistryStyle.css';

{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" /> */}

function setCpfCnpj (opt) {
  var value = opt.value;  
  console.log(value);
  // alert("The input value has changed. The new value is: " + opt);
  // document.getElementById("srt").value = document.getElementById("option1").value;
}

export default function UserRegistry() {
  // const [opt, setCpfCnpj] = useState("");
  return(
    <div>
      <Navbar />
    <div class="container">
        <h1 class="well">Registre-se</h1>
      <div class="col-lg-12 well">
      <div class="row">
            <form>
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>Nome Completo</label>
                    <input type="text" placeholder="Entre com seu nome completo.." class="form-control" />
                  </div>
                  <div class="col-sm-4 form-group">
                  <label>Selecione uma opção</label>
                  <select class="form-control" id="option1" onChange={e => setCpfCnpj(e.target.value)}>  
                    <option value={"1"} onChange={e => setCpfCnpj(e.target.value)} >Sou Pessoa Física</option>
                    <option value={"2"} onChange={e => setCpfCnpj(e.target.value)}>Sou Pessoa Jurídica</option>
                  </select>
                  </div>
                  <div class="col-sm-4 form-group">
                    <label>CPF/CNPJ</label>
                    <input type="text" placeholder="Entre com seu CPF/CNPJ.." class="form-control" />
                  </div>
                </div>					
                <div class="form-group">
                  <div class="row">
                    <div class="col-sm-4 form-group">
                      <label>Rua/Avenida</label>
                      <input type="text" placeholder="Entre com sua Rua/Avenida.." class="form-control" />
                    </div>
                    <div class="col-sm-4 form-group">
                      <label>Número</label>
                      <input type="number" placeholder="Entre com o número.." class="form-control" />
                    </div>
                    <div class="col-sm-4 form-group">
                      <label>Bairro</label>
                      <input type="text" placeholder="Entre com seu bairro.." class="form-control" />
                    </div>
                  </div>
                </div>	
                <div class="row">
                  <div class="col-sm-4 form-group">
                    <label>Cidade</label>
                    <input type="text" placeholder="Enter com sua cidade.." class="form-control" />
                  </div>	
                  <div class="col-sm-4 form-group">
                    <label>UF</label>
                    <input type="text" placeholder="Entre com seu estado.." class="form-control" />
                  </div>	
                  <div class="col-sm-4 form-group">
                    <label>CEP</label>
                    <input type="text" placeholder="Entre com seu CEP.." class="form-control" />
                  </div>		
                </div>
                <div class="row">
                  <div class="col-sm-6 form-group">
                    <label>Nome de usuário</label>
                    <input type="text" placeholder="Entre com seu nome de usuário.." class="form-control" />
                  </div>		
                  <div class="col-sm-6 form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Entre com sua senha.." class="form-control" />
                  </div>	
                </div>
                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" placeholder="Entre com seu e-mail.." class="form-control" />
                </div>							
              <div class="row">
                <div class="col-sm-4 form-group">
                  <label>Celular</label>
                  <input type="text" placeholder="Entre com seu DDD + Telefone.." class="form-control" />
                </div>		
                  <div class="col-sm-4 form-group">
                  <label>Telefone Residencial</label>
                <input type="text" placeholder="Entre com seu DDD + Telefone Residencial.." class="form-control" />
                  </div>		
                  <div class="col-sm-4 form-group">
                    <label>Telefone Comercial</label>
                    <input type="text" placeholder="Entre com seu DDD + Telefone Comercial.." class="form-control" />
                  </div>	
               </div>
    
              <button type="button" class="btn btn-primary">Cadastrar</button>
              <button type="button" class="btn btn-danger">Cancelar</button>
            </div>
          </form> 
        </div>
      </div>
      </div>
    </div>
  );
}
import React, { Component, useState } from 'react';
import { Navbar, SubmitUserForm } from '../components/index';
import UserRegistryStyle from '../styles/userRegistryStyle.css';

{/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" /> */}

export default function UserRegistry() {

  return(
    <div>
      <Navbar />
      <div className="modal-body">
        <SubmitUserForm requestMethod="post" />
      </div>
    </div>
  );
}

//     <div>
//       <Navbar />
//     <div className="container">
//         <h1 className="well">Registre-se</h1>
//       <div className="col-lg-12 well">
//       <div className="row">
//             <form>
//               <div className="col-sm-12">
//                 <div className="row">
//                   <div className="col-sm-4 form-group">
//                     <label>Nome Completo</label>
//                     <input type="text" placeholder="Entre com seu nome completo.." className="form-control" />
//                   </div>
//                   <div className="col-sm-4 form-group">
//                   <label>Selecione uma opção</label>
//                   <select className="form-control" id="option1">  
//                     <option value={"1"} >Sou Pessoa Física</option>
//                     <option value={"2"} >Sou Pessoa Jurídica</option>
//                   </select>
//                   </div>
//                   <div className="col-sm-4 form-group">
//                     <label>CPF/CNPJ</label>
//                     <input type="text" placeholder="Entre com seu CPF/CNPJ.." className="form-control" />
//                   </div>
//                 </div>					
//                 <div className="form-group">
//                   <div className="row">
//                     <div className="col-sm-4 form-group">
//                       <label>Rua/Avenida</label>
//                       <input type="text" placeholder="Entre com sua Rua/Avenida.." className="form-control" />
//                     </div>
//                     <div className="col-sm-4 form-group">
//                       <label>Número</label>
//                       <input type="number" placeholder="Entre com o número.." className="form-control" />
//                     </div>
//                     <div className="col-sm-4 form-group">
//                       <label>Bairro</label>
//                       <input type="text" placeholder="Entre com seu bairro.." className="form-control" />
//                     </div>
//                   </div>
//                 </div>	
//                 <div className="row">
//                   <div className="col-sm-4 form-group">
//                     <label>Cidade</label>
//                     <input type="text" placeholder="Enter com sua cidade.." className="form-control" />
//                   </div>	
//                   <div className="col-sm-4 form-group">
//                     <label>UF</label>
//                     <input type="text" placeholder="Entre com seu estado.." className="form-control" />
//                   </div>	
//                   <div className="col-sm-4 form-group">
//                     <label>CEP</label>
//                     <input type="text" placeholder="Entre com seu CEP.." className="form-control" />
//                   </div>		
//                 </div>
//                 <div className="row">
//                   <div className="col-sm-6 form-group">
//                     <label>Nome de usuário</label>
//                     <input type="text" placeholder="Entre com seu nome de usuário.." className="form-control" />
//                   </div>		
//                   <div className="col-sm-6 form-group">
//                     <label>Senha</label>
//                     <input type="password" placeholder="Entre com sua senha.." className="form-control" />
//                   </div>	
//                 </div>
//                 <div className="form-group">
//                   <label>E-mail</label>
//                   <input type="email" placeholder="Entre com seu e-mail.." className="form-control" />
//                 </div>							
//               <div className="row">
//                 <div className="col-sm-4 form-group">
//                   <label>Celular</label>
//                   <input type="text" placeholder="Entre com seu DDD + Telefone.." className="form-control" />
//                 </div>		
//                   <div className="col-sm-4 form-group">
//                   <label>Telefone Residencial</label>
//                 <input type="text" placeholder="Entre com seu DDD + Telefone Residencial.." className="form-control" />
//                   </div>		
//                   <div className="col-sm-4 form-group">
//                     <label>Telefone Comercial</label>
//                     <input type="text" placeholder="Entre com seu DDD + Telefone Comercial.." className="form-control" />
//                   </div>	
//                </div>
    
//               <button type="button" className="btn btn-primary">Cadastrar</button>
//               <button type="button" className="btn btn-danger">Cancelar</button>
//             </div>
//           </form> 
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }
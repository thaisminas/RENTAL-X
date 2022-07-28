# Cadastro de Carro
**RF**
Deve ser possivel cadastrar  um novo carro

**RN**
Não deve ser possivel cadastrar um carro com uma placa ja existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade por padrão.
O usuario responsável pelo cadastro deve ser um usuario administrador.


# Listagem de Carros
**RF**
Deve ser possivel listar todos os carros disponiveis.


**RN** 
O usuario não precisa estar logado no sistema.


# Cadastro de Especificações do Carro
**RF**
Deve ser possível cadastrar uma especificação para um curso.
Dever ser possivel listar todas as especificações
Deve ser possivel listar todos os carros

**RN**
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para um mesmo carro.
O usuario responsável pelo cadastro deve ser um usuario administrador.


# Cadastro de Imagens do Carro 
**RF**
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuario responsável pelo cadastro deve ser um usuario administrador.


# Aluguel de Carro 
**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duracao minima de 24 horas.
Nao deve ser possivel cadastrar um novo aluguel caso ja existe um aberto para o mesmo usuario 
Nao deve ser possivel cadastrar um novo aluguel caso ja existe um aberto para o mesmo carro 

### Comando para adicionar o babel e webpack

$ npm i --save-dev @babel/core @babel/preset-env @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2

é possível criar scripts no arquivo `package.json`

```json
"scripts": {
"gera": "webpack -w"
}
```

O -w serve para deixar o script rodando e monitorando a aplicação. Sempre que houver alteração no código fonte, o webpack
automaticamente alterará os arquivos no bundle (public).

lembrando que a pasta ./node_modules deve ser ignorada e não é necessária para compartilhamento da aplicação, podendo
serem todos os módulos reinstalado através da declaração das dependências utilizadas no projeto no `package.json`,
além do comando `npm install` ou `npm i`
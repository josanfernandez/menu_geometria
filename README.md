Creamos un nuevo proyecto y dentro de esa carpeta:
npm init --yes
npm install typescript -D
npx tsc --init
Se genera el tsconfig.json y en el hacemos las modificaciones de siempre: '"target": "es6",', '"outDir": "./dist",' y en la linea 68 ponemos lo siguiente:
  "exclude": [
    "node_modules"
  ]
En el .gitignore ponemos dist y node_modules
Instalamos el mongoose:
npm install mongoose
Con esto typescript puede reconocer los tipos de mongoose:
npm install @types/mongoose
Creamos src y dentro index.ts, donde irán los programas
Para compilar usamos npx tsc -w, y creará el dist
Para ejecutar lo que hemos compilado usamos node dist o node dist/index
Ahora lo subimos a un repositorio:
git init
Creamos el repositorio en Github con el mismo nombre del proyecto
Creamos el README.md
Ahora subimos nuestro proyecto a Github
git add .
git commit -m "first commit"
git remote add origin https://github.com/RodriguezJimenezJorge/002_nodejs.git
git push -u origin master
Creamos la carpeta view y metemos los archivos 'entradaTeclado' y 'menuPral'
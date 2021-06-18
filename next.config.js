module.exports = { 
    "compilerOptions": {
      "target": "es6",
      "lib": ["dom", "dom.iterable", "esnext"],
      "allowJs": true,
      "baseUrl": ".",
      "skipLibCheck": true,
      "strict": true,
      "forceConsistentCasingInFileNames": true,
      "noEmit": true,
      "esModuleInterop": true,
      "module": "esnext",
      "moduleResolution": "node",
      "resolveJsonModule": true,
      "isolatedModules": true,
      "sourceMap": true,
      "removeComments": true,
  
      "jsx": "preserve"
    },
    "include": ["next-env.d.ts", "**/*.js", "**/*.jsx"],
    "exclude": ["node_modules"]
  }

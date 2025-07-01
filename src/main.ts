import app from './express';

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

const API_URL = 'http://localhost:3001/consulta';


export const fetchCores = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

 export const fetchControle = async () => {
   const response = await fetch('http://localhost:3001/controle');
  return response.json();
}

export const fetchTotal = async () => {
  const response = await fetch('http://localhost:3001/totalCores');
 return response.json();
}



/*
export const deleteProduto = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};


export const createProduto = async (produto) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(produto),
  });
};


export const updateProduto = async (id, produto) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(produto),
  });
};
*/



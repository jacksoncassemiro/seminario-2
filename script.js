// Função para exibir mensagens na interface (substituindo alert/console.log)
function showMessage(message, type = 'info') {
  const messageContainer = document.getElementById('messageContainer');
  const alertDiv = document.createElement('div');

  alertDiv.className = `p-3 mb-3 rounded-lg shadow-md text-white ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500'}`;

  alertDiv.textContent = message;
  messageContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 5000); // Remove a mensagem após 5 segundos
}

// 1. GET (Obter todos os posts)
async function getAllPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    const data = await response.json();

    showMessage('Posts obtidos com sucesso!', 'success');
    console.log('Todos os Posts:', data);
    // Exemplo de como exibir no HTML (apenas os 5 primeiros títulos)

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Últimos 5 Posts:</h2>';

    data.slice(0, 5).forEach(post => {
      outputDiv.innerHTML += `<p><strong>${post.title}</strong></p>`;
    });

  } catch (error) {
    showMessage(`Erro ao obter posts: ${error.message}`, 'error');
    console.error('Erro ao obter posts:', error);
  }
}

// 2. GET (Obter um post específico)
async function getPostById(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();

    showMessage(`Post ${id} obtido com sucesso!`, 'success');
    console.log(`Post ${id}:`, data);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<h2>Post ID ${id}:</h2><p><strong>${data.title}</strong></p><p>${data.body}</p>`;
  } catch (error) {
    showMessage(`Erro ao obter post ${id}: ${error.message}`, 'error');
    console.error(`Erro ao obter post ${id}:`, error);
  }
}

// 3. POST (Criar um novo post)
async function createPost() {
  const newPost = {
    title: 'Novo Post Criado via API',
    body: 'Este é o conteúdo de um post criado programaticamente.',
    userId: 1,
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();

    showMessage('Novo post criado com sucesso!', 'success');
    console.log('Post Criado:', data);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<h2>Novo Post Criado (ID: ${data.id}):</h2><p><strong>${data.title}</strong></p><p>${data.body}</p>`;
  } catch (error) {
    showMessage(`Erro ao criar post: ${error.message}`, 'error');
    console.error('Erro ao criar post:', error);
  }
}

// 4. PUT (Atualizar um post existente)
async function updatePost(id) {
  const updatedPost = {
    id: id,
    title: 'Título do Post Atualizado',
    body: 'Conteúdo do post foi modificado via PUT.',
    userId: 1,
  };

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }

    const data = await response.json();

    showMessage(`Post ${id} atualizado com sucesso!`, 'success');
    console.log(`Post ${id} Atualizado:`, data);

    const outputDiv = document.getElementById('output');

    outputDiv.innerHTML += `<h2>Post Atualizado (ID: ${data.id}):</h2><p><strong>${data.title}</strong></p><p>${data.body}</p>`;
  } catch (error) {
    showMessage(`Erro ao atualizar post ${id}: ${error.message}`, 'error');
    console.error(`Erro ao atualizar post ${id}:`, error);
  }
}

// 5. DELETE (Excluir um post)
async function deletePost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP! Status: ${response.status}`);
    }
    // DELETE geralmente retorna status 200 OK ou 204 No Content
    showMessage(`Post ${id} excluído com sucesso!`, 'success');
    console.log(`Post ${id} Excluído. Status: ${response.status}`);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML += `<h2>Post ${id} Excluído.</h2>`;
  } catch (error) {
    showMessage(`Erro ao excluir post ${id}: ${error.message}`, 'error');
    console.error(`Erro ao excluir post ${id}:`, error);
  }
}

// Adiciona event listeners aos botões
window.onload = () => {
  document.getElementById('getAllPostsBtn').addEventListener('click', getAllPosts);
  document.getElementById('getPost1Btn').addEventListener('click', () => getPostById(1));
  document.getElementById('createPostBtn').addEventListener('click', createPost);
  document.getElementById('updatePost1Btn').addEventListener('click', () => updatePost(1));
  document.getElementById('deletePost1Btn').addEventListener('click', () => deletePost(1));
};
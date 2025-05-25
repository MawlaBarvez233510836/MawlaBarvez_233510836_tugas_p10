<template>
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <router-link to="/">🏠 Home</router-link>
        <router-link to="/books">📚 Buku</router-link>
        <router-link to="/books/search">🔍 Cari Buku</router-link>
        <router-link to="/my-borrows">📦 Peminjaman</router-link>
        <router-link to="/profile">👤 Profil</router-link>
        <router-link to="/admin">🛠️ Admin</router-link>
        <router-link to="/login">🔑 Login</router-link>
      </nav>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background-color: #f1f1f1;
  padding: 20px;
  border-right: 1px solid #ccc;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.sidebar nav {
  display: flex;
  flex-direction: column;
}

.sidebar a {
  margin-bottom: 15px;
  text-decoration: none;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  transition: background 0.2s;
}

.sidebar a.router-link-active {
  background-color: #42b983;
  color: white;
}

.sidebar a:hover {
  background-color: #ddd;
}

/* Content area */
.content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}
</style>

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/taches';

class TacheService {
  getAllTaches() {
    return axios.get(API_URL);
  }

  createTache(tache) {
    return axios.post(API_URL, tache);
  }

  updateTache(id, tache) {
    return axios.put(`${API_URL}/${id}`, tache);
  }

  deleteTache(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  getTache(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

const tacheServiceInstance = new TacheService();
export default tacheServiceInstance;

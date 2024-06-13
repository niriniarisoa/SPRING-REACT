import axios from 'axios';

const API_URL = 'http://localhost:8080/api/colocataires';

class ColocataireService {
  getAllColocataires() {
    return axios.get(API_URL);
  }

  createColocataire(colocataire) {
    return axios.post(API_URL, colocataire);
  }

  updateColocataire(id, colocataire) {
    return axios.put(`${API_URL}/${id}`, colocataire);
  }

  deleteColocataire(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  getColocataire(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

const colocataireServiceInstance = new ColocataireService();
export default colocataireServiceInstance;

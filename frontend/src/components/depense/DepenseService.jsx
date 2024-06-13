import axios from 'axios';

const API_URL = 'http://localhost:8080/api/depenses';

class DepenseService {
  getAllDepenses() {
    return axios.get(API_URL);
  }

  createDepense(depense) {
    return axios.post(API_URL, depense);
  }

  updateDepense(id, depense) {
    return axios.put(`${API_URL}/${id}`, depense);
  }

  deleteDepense(id) {
    return axios.delete(`${API_URL}/${id}`);
  }

  getDepense(id) {
    return axios.get(`${API_URL}/${id}`);
  }
}

const depenseServiceInstance = new DepenseService();
export default depenseServiceInstance;

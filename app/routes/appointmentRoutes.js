const express = require('express');
const router = express.Router();
const {
    createAppointment,
    getAllAppointments,
    getAppointmentsByDoctor,
    updateAppointment,
    deleteAppointment,
} = require('../controllers/appointmentController');

router.post('/', createAppointment);
router.get('/', getAllAppointments);
router.get('/doctor/:id', getAppointmentsByDoctor);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;


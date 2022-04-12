package com.apiargentinaprograma.portfolio.service;

import com.apiargentinaprograma.portfolio.dao.PersonaDao;
import com.apiargentinaprograma.portfolio.models.Persona;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService implements IPersonaService{

    @Autowired
    public PersonaDao personaDao;

    @Override
    public List<Persona> findAll() {
        return personaDao.findAll();
    }

    @Override
    public void save(Persona persona) {
        personaDao.save(persona);
    }

    @Override
    public void deleteById(Long id) {
        personaDao.deleteById(id);
    }

    @Override
    public Persona findById(Long id) {
        return personaDao.findById(id).orElse(null);
    }
}

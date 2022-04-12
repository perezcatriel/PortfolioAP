package com.apiargentinaprograma.portfolio.service;

import com.apiargentinaprograma.portfolio.models.Persona;

import java.util.List;

public interface IPersonaService {

    public void save(Persona persona);

    public List<Persona> findAll();

    public Persona findById(Long id);

    public void deleteById (Long id);


}

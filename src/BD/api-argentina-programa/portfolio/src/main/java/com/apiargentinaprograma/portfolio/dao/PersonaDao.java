package com.apiargentinaprograma.portfolio.dao;

import com.apiargentinaprograma.portfolio.models.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaDao extends JpaRepository<Persona, Long> {
}

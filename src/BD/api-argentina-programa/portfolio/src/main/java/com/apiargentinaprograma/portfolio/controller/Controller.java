package com.apiargentinaprograma.portfolio.controller;

import com.apiargentinaprograma.portfolio.models.Persona;
import com.apiargentinaprograma.portfolio.service.IPersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {

  @Autowired
   public IPersonaService personaService;

   @GetMapping("/hola")
   public String decirHola() {
       return "hola catriel";
   }

    @PostMapping("/agregar/persona")
    public void agregarPersona (@RequestBody Persona persona) {
        personaService.save(persona);
    }

    @GetMapping("/ver/personas")
    @ResponseBody
    public List<Persona> verPersonas() {
        return personaService.findAll();
    }

    @DeleteMapping("/borrar/{id}")
    public void borrarPersona(@PathVariable Long id) {
        personaService.deleteById(id);
    }
}

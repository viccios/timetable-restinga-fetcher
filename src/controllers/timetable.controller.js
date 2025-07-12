import { fetchHorarioTurmas } from '../utils/fetchHorarioTurmas.js';

const {
  periodos,
  disciplinas,
  professores,
  turmas,
  salasDeAula,
  horarioTurmas,
  horarioProfessores,
  horarioSalasDeAula,
} = await fetchHorarioTurmas();

function getPeriods(_, res) {
  try {
    res.status(200).json(periodos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar períodos', details: error.message });
  }
}

function getSubjects(_, res) {
  try {
    res.status(200).json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas', details: error.message });
  }
}

function getTeachers(_, res) {
  try {
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professores', details: error.message });
  }
}

function getClasses(_, res) {
  try {
    res.status(200).json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turmas', details: error.message });
  }
}

function getClassrooms(_, res) {
  try {
    res.status(200).json(salasDeAula);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar salas de aula', details: error.message });
  }
}

function getClassSchedule(_, res) {
  try {
    res.status(200).json(horarioTurmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário das turmas', details: error.message });
  }
}

function getTeachersSchedule(_, res) {
  try {
    res.status(200).json(horarioProfessores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário dos professores', details: error.message });
  }
}

function getClassroomsSchedule(_, res) {
  try {
    res.status(200).json(horarioSalasDeAula);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário das salas de aula', details: error.message });
  }
}

// Funções de busca por ID e nome usando query parameters
function searchPeriods(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const periodo = periodos.find(p => p.id === id);
      if (!periodo) {
        return res.status(404).json({ error: 'Período não encontrado' });
      }
      return res.status(200).json(periodo);
    }
    
    if (name) {
      const periodos_filtrados = periodos.filter(p => 
        p.name.toLowerCase().includes(name.toLowerCase()) || 
        p.short.toLowerCase().includes(name.toLowerCase())
      );
      if (periodos_filtrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum período encontrado com esse nome' });
      }
      return res.status(200).json(periodos_filtrados);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar período', details: error.message });
  }
}

function searchSubjects(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const disciplina = disciplinas.find(d => d.id === id);
      if (!disciplina) {
        return res.status(404).json({ error: 'Disciplina não encontrada' });
      }
      return res.status(200).json(disciplina);
    }
    
    if (name) {
      const disciplinas_filtradas = disciplinas.filter(d => 
        d.name.toLowerCase().includes(name.toLowerCase()) || 
        d.short.toLowerCase().includes(name.toLowerCase())
      );
      if (disciplinas_filtradas.length === 0) {
        return res.status(404).json({ error: 'Nenhuma disciplina encontrada com esse nome' });
      }
      return res.status(200).json(disciplinas_filtradas);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplina', details: error.message });
  }
}

function searchTeachers(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const professor = professores.find(p => p.id === id);
      if (!professor) {
        return res.status(404).json({ error: 'Professor não encontrado' });
      }
      return res.status(200).json(professor);
    }
    
    if (name) {
      const professores_filtrados = professores.filter(p => 
        p.name.toLowerCase().includes(name.toLowerCase()) || 
        p.short.toLowerCase().includes(name.toLowerCase())
      );
      if (professores_filtrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum professor encontrado com esse nome' });
      }
      return res.status(200).json(professores_filtrados);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professor', details: error.message });
  }
}

function searchClasses(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const turma = turmas.find(t => t.id === id);
      if (!turma) {
        return res.status(404).json({ error: 'Turma não encontrada' });
      }
      return res.status(200).json(turma);
    }
    
    if (name) {
      const turmas_filtradas = turmas.filter(t => 
        t.name.toLowerCase().includes(name.toLowerCase()) || 
        t.short.toLowerCase().includes(name.toLowerCase())
      );
      if (turmas_filtradas.length === 0) {
        return res.status(404).json({ error: 'Nenhuma turma encontrada com esse nome' });
      }
      return res.status(200).json(turmas_filtradas);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turma', details: error.message });
  }
}

function searchClassrooms(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const sala = salasDeAula.find(s => s.id === id);
      if (!sala) {
        return res.status(404).json({ error: 'Sala de aula não encontrada' });
      }
      return res.status(200).json(sala);
    }
    
    if (name) {
      const salas_filtradas = salasDeAula.filter(s => 
        s.name.toLowerCase().includes(name.toLowerCase()) || 
        s.short.toLowerCase().includes(name.toLowerCase())
      );
      if (salas_filtradas.length === 0) {
        return res.status(404).json({ error: 'Nenhuma sala de aula encontrada com esse nome' });
      }
      return res.status(200).json(salas_filtradas);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar sala de aula', details: error.message });
  }
}

function searchClassSchedule(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const horario = horarioTurmas.find(h => h.id === id);
      if (!horario) {
        return res.status(404).json({ error: 'Horário da turma não encontrado' });
      }
      return res.status(200).json(horario);
    }
    
    if (name) {
      const horarios_filtrados = horarioTurmas.filter(h => 
        h.nome.toLowerCase().includes(name.toLowerCase())
      );
      if (horarios_filtrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum horário de turma encontrado com esse nome' });
      }
      return res.status(200).json(horarios_filtrados);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário da turma', details: error.message });
  }
}

function searchTeacherSchedule(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const horario = horarioProfessores.find(h => h.id === id);
      if (!horario) {
        return res.status(404).json({ error: 'Horário do professor não encontrado' });
      }
      return res.status(200).json(horario);
    }
    
    if (name) {
      const horarios_filtrados = horarioProfessores.filter(h => 
        h.nome.toLowerCase().includes(name.toLowerCase())
      );
      if (horarios_filtrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum horário de professor encontrado com esse nome' });
      }
      return res.status(200).json(horarios_filtrados);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário do professor', details: error.message });
  }
}

function searchClassroomSchedule(req, res) {
  try {
    const { id, name } = req.query;
    
    if (id) {
      const horario = horarioSalasDeAula.find(h => h.id === id);
      if (!horario) {
        return res.status(404).json({ error: 'Horário da sala de aula não encontrado' });
      }
      return res.status(200).json(horario);
    }
    
    if (name) {
      const horarios_filtrados = horarioSalasDeAula.filter(h => 
        h.nome.toLowerCase().includes(name.toLowerCase())
      );
      if (horarios_filtrados.length === 0) {
        return res.status(404).json({ error: 'Nenhum horário de sala de aula encontrado com esse nome' });
      }
      return res.status(200).json(horarios_filtrados);
    }
    
    res.status(400).json({ error: 'Parâmetro id ou name é obrigatório' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar horário da sala de aula', details: error.message });
  }
}

export {
  // Funções originais
  getPeriods,
  getSubjects,
  getTeachers,
  getClasses,
  getClassrooms,
  getClassSchedule,
  getTeachersSchedule,
  getClassroomsSchedule,
  
  // Funções de busca com query parameters
  searchPeriods,
  searchSubjects,
  searchTeachers,
  searchClasses,
  searchClassrooms,
  searchClassSchedule,
  searchTeacherSchedule,
  searchClassroomSchedule,
};

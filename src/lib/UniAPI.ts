interface Course {
  id: string
  name: string
  code: string
  year: number
  type: string
  group: string
}


interface Profile {
  name: string
  surname: string
  email: string
  avatar: string | null
}

interface Professor extends Profile {
  courses: string[]
}

interface ProfessorTrait {
  id: string
  label: string
}

interface SubjectRating {
  difficulty: number
  lessons: number
  resources: number
}

interface SurveyQuestion {
  id: string
  question: string
}

function createUniAPIClient() {
  const client = {
    async login(email: string, password: string): Promise<Profile> {
      if (!email || !password) {
        throw new Error('Missing credentials')
      }

      if (!email.endsWith('@alumnos.upm.es')) {
        throw new Error('Unknown email provided')
      }

      return {
        name: 'Juan José',
        surname: 'Herrero Barbosa',
        email: 'juan.hbarbosa@alumnos.upm.es',
        avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png',
      }
    },

    async enrolledCourses(): Promise<Course[]> {
      return [
        {
          id: '95000013',
          code: '95000013',
          name: 'Electromagnetismo',
          type: 'T',
          group: 'TST 25.1',
          year: 2,
        },
        {
          id: '95000027',
          code: '95000027',
          name: 'Teoria de la Informacion',
          type: 'B',
          group: 'TST 35.1',
          year: 3,
        },
        {
          id: '95000030',
          code: '95000030',
          name: 'Sistemas de Transmision',
          type: 'B',
          group: 'TST 35.1',
          year: 3,
        },
        {
          id: '95000036',
          code: '95000036',
          name: 'Comunicaciones Opticas',
          type: 'B',
          group: 'TST35',
          year: 3,
        },
        {
          year: 3,
          id: '95000037',
          code: '95000037',
          name: 'Electronica de Comunicaciones',
          type: 'B',
          group: 'ECOM35.2',
        },
        {
          year: 4,
          id: '95000053',
          code: '95000053',
          name: 'Ingenieria Web',
          type: 'O',
          group: 'TST 42.1',
        },
        {
          year: 4,
          id: '95000057',
          code: '95000057',
          name: 'Ing de Sistemas y Servicios Telematicos',
          type: 'O',
          group: 'TST 42.2',
        },
      ]
    },

    async subject({ subjectId }: { subjectId: string }): Promise<Course> {
      const courses = await client.enrolledCourses()
      const course = courses.find(course => course.id === subjectId)

      if (!course) {
        throw new Error(`Unknown subject ${subjectId}`)
      }

      return course
    },

    async professors(params: {subjectId: string}): Promise<Professor[]> {
      return [
        {
          name: 'Belén',
          surname: 'Galocha',
          email: 'bgalocha@upm.es',
          avatar: null,
          courses: ['95000013','95000037'],
        },
        {
          name: 'Manuel',
          surname: 'Sierra',
          email: 'manuelsierra@upm.es',
          avatar: null,
          courses: ['95000030','95000013'],

        },
        {
          name: 'Santiago',
          surname: 'Pavón',
          email: 'santipavon@upm.es',
          avatar: null,
          courses: ['95000053', '95000057'],

        },
        {
          name: 'Joaquín',
          surname: 'Salvachua',
          email: 'jsalvachua@upm.es',
          avatar: null,
          courses: ['95000027', '95000057'],

        },
        {
          name: 'Jesús',
          surname: 'Grajal',
          email: 'jesusgrajal@upm.es',
          avatar: null,
          courses: ['95000030', '95000036'],

        },
        {
          name: 'Mareca',
          surname: 'Gonzalez',
          email: 'marecagon@upm.es',
          avatar: null,
          courses: ['95000027', '95000030'],

        },
        {
          name: 'Tomás',
          surname: 'Robles',
          email: 'tomasrobles@upm.es',
          avatar: null,
          courses: ['95000037','95000036'],
        },
        {
          name: 'Juan Carlos',
          surname: 'Yelmo',
          email: 'jcarlosyelmo@upm.es',
          avatar: null,
          courses: ['95000053','95000036'],
        },
        {
          name: 'Victor',
          surname: 'Villagra',
          email: 'victorvillagra@upm.es',
          avatar: null,
          courses: ['95000053','95000036'],
        },

      ]
    },
    
    async professorTraits(params: {subjectId: string}): Promise<ProfessorTrait[]> {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
      return [
        { id: '1', label: 'bueno en la pizarra' },
        { id: '2', label: 'buenos apuntes' },
        { id: '3', label: 'bueno en tutorias' },
        { id: '4', label: 'chistoso' },
      ]
    },

    async subjectRating(params: {subjectId: string}): Promise<SubjectRating> {
      return {
        difficulty: 4,
        lessons: 4,
        resources: 4,
      }
    },

    async surveyQuestions(params: {subjectId: string}): Promise<SurveyQuestion[]> {
      return [
        {
          id: 'qa1',
          question: 'Las actividades de la asignatura se reparten de manera uniforme durante el semestre.',
        },
        {
          id: 'qa2',
          question: 'En el desarrollo de esta asignatura no hay solapamientos con los contenidos de otras, ni repeticiones innecesarias.',
        },
        {
          id: 'qa3',
          question: 'Se han coordinado adecuadamente las clases teóricas y prácticas previstas en el programa.',
        },
        {
          id: 'qa4',
          question: 'Las prácticas de laboratorio y las actividades complementarias (conferencias, seminarios, visitas de estudio, etc.…) ayudan a la comprensión de la asignatura.',
        },
        {
          id: 'qa5',
          question: 'Los métodos utilizados para mi evaluación (exámenes, memorias de prácticas, trabajos individuales o de grupo, etc.) son adecuados para el tipo de actividades y contenidos de la asignatura.',
        },
        {
          id: 'qa6',
          question: 'La carga de trabajo que comprende esta asignatura es adecuada para el número de créditos que tiene asignados.',
        },
        {
          id: 'qa7',
          question: 'Los conocimientos adquiridos en esta asignatura son importantes para mi actividad profesional.',
        },
        {
          id: 'qa8',
          question: 'En general, estoy satisfecho con el desarrollo de la asignatura.',
        },
        {
          id: 'qp1',
          question: 'El profesor cumple con su horario de clase establecido.',
        },
        // FIXME: Faltan preguntas:
        // http://www.upm.es/sfs/Rectorado/Vicerrectorado%20de%20Ordenacion%20Academica%20y%20Planificacion%20Estrategica/Compromiso%20con%20la%20Calidad/Programas/Docentia/Normativa_DOCENTIA-UPM%202.0_%20CG_26_09_19.pdf
        // pagina 83
      ]
    },

    async submitSurvey(surveyData: any) {
      // FIXME: We need to properly type survey data here
      console.log(surveyData)
    }
  }

  return client
}

type UniAPIClient = ReturnType<typeof createUniAPIClient>

function addRandomDelayToCalls(client: UniAPIClient): UniAPIClient {
  return new Proxy<UniAPIClient>(client, {
    get(target, prop, receiver) {
      const fn = (target as any)?.[prop]

      if (typeof fn === 'function') {
        const delayWrapper = (...args: any[]) => {
          const returnValue = fn(...args)
          if (returnValue instanceof Promise) {
            return returnValue
              .then(result => new Promise(resolve => setTimeout(resolve, Math.random() * 1000, result)))
              .catch(err => new Promise((_, reject) => setTimeout(reject, Math.random() * 1000, err)))
          }
          return returnValue
        }

        return delayWrapper
      }

      return Reflect.get(target, prop, receiver)
    }
  })
}

const defaultClient = addRandomDelayToCalls(createUniAPIClient())
export default defaultClient
export { createUniAPIClient, addRandomDelayToCalls }
export type { 
  Course,
  Professor,
  ProfessorTrait,
  Profile,
  SubjectRating,
  SurveyQuestion,
  UniAPIClient,
}
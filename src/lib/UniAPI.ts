import { useImperativeHandle } from "react";

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
}

interface Professor extends Profile {
  courses: string[]
}

function createUniAPIClient() {
  return {
    async login(email: string, password: string): Promise<Profile> {
      if (!email || !password) {
        throw new Error('Missing credentials')
      }

      if (!email.endsWith('@alumnos.upm.es')) {
        throw new Error('Unknown email provided')
      }

      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
      return {
        name: 'Juan José',
        surname: 'Herrero Barbosa',
        email: 'juan.hbarbosa@alumnos.upm.es',
      }
    },

    async enrolledCourses(): Promise<Course[]> {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
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

    async enrolledProfessors(params: {subjectId: string}): Promise<Professor[]> {
      await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
      return [
        {
          name: 'Belén',
          surname: 'Galocha',
          email: 'bgalocha@upm.es',
          courses: ['95000013','95000037'],
        },
        {
          name: 'Manuel',
          surname: 'Sierra',
          email: 'manuelsierra@upm.es',
          courses: ['95000030','95000013'],

        },
        {
          name: 'Santiago',
          surname: 'Pavón',
          email: 'santipavon@upm.es',
          courses: ['95000053', '95000057'],

        },
        {
          name: 'Joaquín',
          surname: 'Salvachua',
          email: 'jsalvachua@upm.es',
          courses: ['95000027', '95000057'],

        },
        {
          name: 'Jesús',
          surname: 'Grajal',
          email: 'jesusgrajal@upm.es',
          courses: ['95000030', '95000036'],

        },
        {
          name: 'Mareca',
          surname: 'Gonzalez',
          email: 'marecagon@upm.es',
          courses: ['95000027', '95000030'],

        },
        {
          name: 'Tomás',
          surname: 'Robles',
          email: 'tomasrobles@upm.es',
          courses: ['95000037','95000036'],
        },
        {
          name: 'Juan Carlos',
          surname: 'Yelmo',
          email: 'jcarlosyelmo@upm.es',
          courses: ['95000053','95000036'],
        },
        {
          name: 'Victor',
          surname: 'Villagra',
          email: 'victorvillagra@upm.es',
          courses: ['95000053','95000036'],
        },

      ]
    },
    
  }
}

type UniAPIClient = ReturnType<typeof createUniAPIClient>

export default createUniAPIClient()
export { createUniAPIClient }
export type { 
  Course,
  Professor,
  Profile,
  UniAPIClient,
}
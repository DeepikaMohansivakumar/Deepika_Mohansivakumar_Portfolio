import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const courses = [
  {
    name: 'Advanced Developed Python Programming (ADPP)',
    description:
      'Successfully completed the Advanced Developed Python Programming (ADPP) course, which provided a strong foundation in programming and software development. The course covered C, C++, and Python, starting from core programming concepts and progressing to advanced Python development.',
    details:
      'It included structured programming, object-oriented programming, data structures, file handling, exception handling, modules and packages, database connectivity, debugging, and real-world application development. This course strengthened my analytical thinking, problem-solving skills, and ability to build efficient, maintainable software solutions.',
  },
  {
    name: 'Java Full Stack Development',
    description:
      'Successfully completed the Java Full Stack Development course, gaining practical knowledge in building end-to-end web applications using Java technologies and modern frontend frameworks.',
    details:
      'The course covered frontend development, backend development, database management, RESTful APIs, version control, and deployment concepts. Developed hands-on experience in creating responsive, database-driven web applications following industry best practices.',
  },
]

export default function Courses() {
  return (
    <section id="courses" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-3">Courses</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
            Recent learning highlights
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {courses.map((course) => (
            <motion.article
              key={course.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-[2rem] border border-white/10 bg-white/70 p-8 shadow-2xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="inline-flex items-center gap-3 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">
                <CheckCircle2 size={18} /> Completed ✅
              </div>

              <div className="mt-6 space-y-6">
                <h3 className="text-2xl font-semibold text-ink dark:text-white">{course.name}</h3>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                  {course.description}
                </p>
                <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                  {course.details}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

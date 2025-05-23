
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Swaram | All-in-One Business Solutions</title>
        <meta name="description" content="Swaram offers all-in-one business solutions, manpower services, and event management." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header style={styles.header}>
        <div style={styles.logo}>Swaram</div>
      </header>

      <main style={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.hero}
        >
          <h1 style={styles.title}>Empowering Businesses with Precision</h1>
          <p style={styles.subtitle}>All-in-One Business Solutions | Manpower Services | Event Management</p>
        </motion.div>

        <section style={styles.grid}>
          {["Business Solutions", "Manpower Services", "Event Management"].map((service, idx) => (
            <motion.div
              key={idx}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{service}</h3>
              <p>We provide expert-level {service.toLowerCase()} tailored to your needs.</p>
            </motion.div>
          ))}
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Swaram. All rights reserved.</p>
      </footer>
    </div>
  )
}

const styles = {
  header: {
    background: '#006400',
    color: 'white',
    padding: '1rem 2rem',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: {
    fontSize: '1.5rem',
    color: '#FFD700'
  },
  main: {
    padding: '2rem',
    textAlign: 'center'
  },
  hero: {
    marginBottom: '3rem'
  },
  title: {
    fontSize: '2.5rem',
    color: '#006400'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#333'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem'
  },
  card: {
    flex: '1 1 300px',
    border: '2px solid #FFD700',
    borderRadius: '12px',
    padding: '1.5rem',
    background: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'left'
  },
  footer: {
    marginTop: '4rem',
    padding: '1rem',
    background: '#006400',
    color: '#fff'
  }
}

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // 1. Rôles
  const admin = await prisma.role.upsert({
    where: { nom: "admin" },
    update: {},
    create: { nom: "admin", description: "Administrateur de la plateforme" },
  });
  const staff = await prisma.role.upsert({
    where: { nom: "staff" },
    update: {},
    create: { nom: "staff", description: "Agent de pointage" },
  });
  const enseignant = await prisma.role.upsert({
    where: { nom: "enseignant" },
    update: {},
    create: { nom: "enseignant", description: "Enseignant" },
  });
  const etudiantRole = await prisma.role.upsert({
    where: { nom: "etudiant" },
    update: {},
    create: { nom: "etudiant", description: "Étudiant" },
  });

  // 2. Une classe
  const classe = await prisma.classe.upsert({
    where: { id: 1 },
    update: {},
    create: { nom: "L2 Génie Informatique", niveau: "L2", annee: "2025-2026" },
  });

  // 3. Utilisateurs de test
  // NOTE : ces mots de passe sont des placeholders de test.
  // Le vrai hachage (bcrypt/Argon2) sera géré par le backend (Membre 2).
  const compteAdmin = await prisma.user.upsert({
    where: { email: "admin@campus.sn" },
    update: {},
    create: {
      nom: "Diop",
      prenom: "Awa",
      email: "admin@campus.sn",
      passwordHash: "changeme_hash_admin",
      roleId: admin.id,
    },
  });

  const compteEtudiant = await prisma.user.upsert({
    where: { email: "etudiant@campus.sn" },
    update: {},
    create: {
      nom: "Diallo",
      prenom: "Hassanatou",
      email: "etudiant@campus.sn",
      passwordHash: "changeme_hash_etudiant",
      roleId: etudiantRole.id,
    },
  });

  // 4. Fiche étudiant liée au compte + à la classe
  const student = await prisma.student.upsert({
    where: { userId: compteEtudiant.id },
    update: {},
    create: {
      matricule: "ETU-0001",
      userId: compteEtudiant.id,
      classeId: classe.id,
    },
  });

  // 5. Quelques pointages de test
  await prisma.attendance.create({
    data: {
      studentId: student.id,
      date: new Date(),
      heureEntree: new Date(),
      statut: "present",
      mode: "manuel",
    },
  });

  console.log("Seed terminé : rôles, classe, utilisateurs et pointage de test créés.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


const menuadmin = (prefix, pushname) => {
 return `

 ❍➣ *GRUPOS*
 │
 │⊷️ ${prefix}closegc
 │⊷️  Cerrar el grupo solo admins
 │⊷️ ${prefix}opengc
 │⊷️  Abrir grupo solo admins
 │⊷️ ${prefix}kick o pafuera
 │⊷️  Eliminar a un miembro 
 │⊷️ ${prefix}promote
 │⊷️  Dar admin a un miembro
 │⊷️ ${prefix}demote
 │⊷️  Quitar el admin
 │⊷️ ${prefix}listadmin
 │⊷️  Ver a todos los admins
 │⊷️ ${prefix}hidetag
 │⊷️  Menciona a todos en secreto
 │⊷️ ${prefix}linkgc
 │⊷️  Link del grupo
 │⊷️ ${prefix}tagall
 │⊷️  Nombra a todos los del grupo
 │⊷️ ${prefix}clan
 │⊷️  Nombra a los miembros registrados del clan
 ╰❏ 
 `


}

exports.menuadmin = menuadmin
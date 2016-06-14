// Needed API endpoints w/HTTP verbs
//
// GET (/customers)
//
// GET (/customers/sort/name?n=10&p=2)
//   name (n)
//   registered_at (r)
//   postal_code (p)
// GET (/customers/:id/current)
// GET (/customers/:id/history)
//
// GET (/movies)
// GET (/movies/sort/release-date?n=5&p=1)
//   title
//   release_date
// GET (/movies/:title/current)
// GET (/movies/:title/history/sort/name)
//
// GET (/rentals/:title)
// GET (/rentals/:title/customers)
// UPDATE (/rentals/:id/:title/check-out)
// UPDATE (/rentals/:id/:title/return)
// GET (/rentals/overdue)

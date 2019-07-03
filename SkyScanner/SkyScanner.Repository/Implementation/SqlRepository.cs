using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using SkyScanner.DataAccess;

namespace SkyScanner.Repository.Implementation
{
    public class SqlRepository<T> : IRepository<T> where T : class
    {
        private IDbSet<T> _dbSet;

        public SqlRepository(ISkyScannerContext context)
        {
            _dbSet = context.Set<T>();
        }

        //Implementarea interfetei IRepository<T>

        public void AddItem(T newItem)
        {
            _dbSet.Add(newItem);
        }

        public List<T> FindItems(Expression<Func<T, bool>> predicate)
        {
           return _dbSet.Where(predicate).ToList();
        }

        public List<T> GetAllItems()
        {
            return _dbSet.ToList();
        }
        
        public void RemoveItem(T removedItem)
        {
            _dbSet.Remove(removedItem);
        }
    }
}

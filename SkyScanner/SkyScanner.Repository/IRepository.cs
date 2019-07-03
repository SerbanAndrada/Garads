using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace SkyScanner.Repository
{
    public interface IRepository<T>
    {
        void AddItem(T newItem);
        void RemoveItem(T removedItem);
        List<T> GetAllItems();
        List<T> FindItems(Expression<Func<T, bool>> predicate);
    }
}

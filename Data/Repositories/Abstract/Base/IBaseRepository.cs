﻿using Domain.Abstract;
using Domain.Models.Pagination;
using System.Linq.Expressions;

namespace DAL.Repositories.Abstract.Base
{
    public interface IBaseRepository<TEntity> where TEntity : BaseEntity
    {
        Task SaveChangesAsync(CancellationToken cancellationToken);

        Task<TEntity?> GetByIdAsync(int id,CancellationToken cancellationToken);

        Task<IEnumerable<TEntity>> GetAllAsync(CancellationToken cancellationToken);

        Task<IEnumerable<TEntity>> GetWhereAsync(Expression<Func<TEntity, bool>> predicate, CancellationToken cancellationToken);

        Task<TEntity?> GetByIdWithIncludeAsync(int id, CancellationToken cancellationToken, params Expression<Func<TEntity, object>>[] includeProperties);

        Task<PaginatedResult<TEntity>> GetPagedData(PagedRequest pagedRequest, CancellationToken cancellationToken);
        
        Task AddAsync(TEntity entity, CancellationToken cancellationToken);

        void Update(TEntity entity, CancellationToken cancellationToken);

        /// <summary>
        /// This method is async only to retrieve entity of corresponding id asynchronously
        /// </summary>
        Task RemoveAsync(int id, CancellationToken cancellationToken);
    }
}

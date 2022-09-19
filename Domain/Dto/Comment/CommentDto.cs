﻿using System.ComponentModel.DataAnnotations;

namespace Domain.Dto.Comment
{
    public class CommentDto
    {
        public int AuthorId { get; set; }
        
        [Required]
        public int PostId { get; set; }

        [Required]
        public string Content { get; set; }
    }
}
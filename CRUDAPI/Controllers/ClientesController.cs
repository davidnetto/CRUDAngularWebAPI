using CRUDAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly Contexto _contexto;

        public ClientesController(Contexto contexto)
        {
            _contexto = contexto;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> PegarTodos()
        {
            return await _contexto.Clientes.ToListAsync();
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Cliente>> ObterPorId(int Id)
        {
            Cliente cliente = await _contexto.Clientes.FindAsync(Id);

            if (cliente == null)
                return NotFound();

            return cliente;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> Salvar(Cliente cliente)
        {
            await _contexto.Clientes.AddAsync(cliente);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> Atualizar(Cliente cliente)
        {
            _contexto.Clientes.Update(cliente);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{Id}")]
        public async Task<ActionResult> Excluir(int Id)
        {
            Cliente cliente = await _contexto.Clientes.FindAsync(Id);
            if (cliente == null)
                return NotFound();

            _contexto.Remove(cliente);
            await _contexto.SaveChangesAsync();
            return Ok();
        }
    }
}

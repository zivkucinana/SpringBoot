package ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Radnik;
import rva.jpa.Sektor;
import rva.repository.RadnikRepository;
import rva.repository.SektorRepository;

@CrossOrigin
@RestController
public class RadnikRestController {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private RadnikRepository radnikRepository;
	@Autowired
	private SektorRepository sektorRepository;
	
	@GetMapping("radnik")
	public Collection<Radnik> getRadnike(){
		return radnikRepository.findAll();
	}
	
	@GetMapping("radnik/{id}")
	public Radnik getRadnik(@PathVariable("id") Integer id) {
		return radnikRepository.getById(id);
	}
	
	@GetMapping("sektorZaRadnikaId/{id}")
	public Collection<Radnik> sektorRadnika(@PathVariable("id") Integer id){
		Sektor s = sektorRepository.getById(id);
		return radnikRepository.findBySektor(s);
}
	
	@PostMapping("radnik")
	public ResponseEntity<Radnik> insertRadnik(@RequestBody Radnik radnik ){
		if(!radnikRepository.existsById(radnik.getId())) {
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
		}
		return new ResponseEntity<Radnik>(HttpStatus.CONFLICT);
	}
	
	@PutMapping("radnik")
	public ResponseEntity<Radnik> updateRadnik(@RequestBody Radnik radnik){
		if(!radnikRepository.existsById(radnik.getId())) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
			radnikRepository.save(radnik);
			return new ResponseEntity<Radnik>(HttpStatus.OK);
			
	}
	
	@Transactional
	@DeleteMapping("radnik/{id}")
	public ResponseEntity<Radnik> deleteRadnik(@PathVariable("id") Integer id){
		if(!radnikRepository.existsById(id)) {
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		}
		radnikRepository.deleteById(id);
		if(id== -100)
			jdbcTemplate.execute(
					"Insert into \"radnik\"(\"id\", \"ime\", \"prezime\",\"broj_lk\", \"obrazovanje\",\"sektor\") "
					+ "values(-100,'test ime', 'test prz','test br_lk','test obrz','test sektor')"
							);
	
		return new ResponseEntity<Radnik>(HttpStatus.OK);
		
	}
}

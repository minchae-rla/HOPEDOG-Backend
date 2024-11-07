package com.example.hope_dog.service.admin;

import com.example.hope_dog.dto.admin.AdminFileDTO;
import com.example.hope_dog.mapper.admin.AdminFileMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminFileService {
    private final AdminFileMapper adminFileMapper;

    public void insertFile(AdminFileDTO file){ adminFileMapper.insertFile(file); }

    public List<AdminFileDTO> selectFileByNoticeNo(Long noticeNo){ return adminFileMapper.selectFileListByNoticeNo(noticeNo); }

    public AdminFileDTO selectFileByNo(Long noticeNo){ return adminFileMapper.selectFileByNo(noticeNo); }

    public void deleteFile(Long noticeNo){ adminFileMapper.deleteFile(noticeNo); }
}
